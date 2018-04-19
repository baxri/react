import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class HomeSecondScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home Second',
        title: 'Home Second',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Second Screen</Text>
                <Button
                    title="Go to Details Second"
                    onPress={() => {
                        this.props.navigation.navigate('DetailsSecond', {
                            itemId: 86,
                            description: "Hi I am from home second page :D",
                        })

                    }}
                />

                <Button
                    title="Menu"
                    onPress={() => {
                        this.props.navigation.navigate('DrawerOpen');
                    }}
                />

            </View>
        );
    }
}
