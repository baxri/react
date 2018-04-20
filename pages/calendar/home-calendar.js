import React from 'react';
import { Button, Image, View, CameraRoll, Vibration, Text, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';


export class HomeCalendarScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Calendar',
        title: 'Calendar',
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {

        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Calendar</Text>
                <CalendarPicker
                    onDateChange={this.onDateChange}
                />
                <View>
                    <Text>SELECTED DATE:{startDate}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
    },
});