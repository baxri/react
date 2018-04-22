import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions } from 'react-native';
import User from '../../models/user';
import Swipeout from 'react-native-swipeout';

let FlatListItem = props => {

    const { itemIndex, id, onPressItem, onEditItem, navigation } = props;

    ShowEdit = () => {
        navigation.navigate('EditCrud', {
            itemId: id,
            description: "Hi I am from home second page :D",
        })
    }

    ShowDelete = () => {

    }

    return (
        <Swipeout right={[
            {
                text: 'Edit',
                backgroundColor: 'rgb(81,134,237)',
                onPress: ShowEdit
            },
            {
                text: 'Delete',
                backgroundColor: 'rgb(217,80,64)',
                onPress: ShowDelete
            }
        ]} autoClose={true}>
            <View style={styles.item}>
                <Text>Swipe me left</Text>
            </View>
        </Swipeout>
    );
}

export class HomeCrudScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home Crud',
        title: 'Home Crud',
    };
    constructor() {
        super();
    }

    state = {
        refreshig: false,
        list: [
            { id: 1, name: 'Giorgi Bibilashvili' },
            { id: 2, name: 'Davit Jafaridze' },
            { id: 3, name: 'mariam Jafaridze' },
            { id: 5, name: 'Giorgi Kutaladze' },
            { id: 6, name: 'Nita Bibilashvili' },
            { id: 7, name: 'Irma Todria' },
            { id: 8, name: 'Lasha Wiqarishvili' },
        ],
    };

    onRefresh = async () => {
        this.setState({
            refreshig: true
        });


        setTimeout(() => {
            this.setState({
                refreshig: false
            });
        }, 1000)
    };


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <FlatList
                    removeClippedSubviews={false}
                    refreshing={this.state.refreshig}
                    onRefresh={this.onRefresh}
                    style={{ alignSelf: "stretch" }}
                    data={this.state.list}
                    renderItem={({ item, index }) =>
                        <FlatListItem {...item} itemIndex={index}

                            onPressItem={() => {
                                alert("OK");
                            }}

                            onEditItem={() => {

                            }}
                            navigation={this.navigation}

                        />
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },

    item: {
        flex: 1,
        padding: 10,
        height: 50,
        flexDirection: 'column',
    },
})