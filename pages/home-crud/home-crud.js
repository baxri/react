import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions } from 'react-native';
import User from '../../models/user';
import Swipeout from 'react-native-swipeout';
import Expo, { SQLite } from 'expo';


import { countDocs } from '../../database';
import localdb, { queryDocs } from '../../database';

class FlatListItem extends React.Component {

    onPressItem = () => {
        this.props.onPressItem()
    }

    onEditItem = () => {
        this.props.onEditItem()
    }

    onDeleteItem = () => {
        this.props.onDeleteItem()
    }

    render() {
        return (
            <Swipeout right={[
                {
                    text: 'Edit',
                    backgroundColor: 'rgb(81,134,237)',
                    onPress: this.onEditItem
                },
                {
                    text: 'Delete',
                    backgroundColor: 'rgb(217,80,64)',
                    onPress: this.onDeleteItem
                }
            ]} autoClose={true}>
                <View style={styles.item}>
                    <Text>SWIPE LEFT</Text>
                </View>
            </Swipeout>
        );
    }

}

export class HomeCrudScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home Crud',
        title: 'Home Crud',
    };

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.onRefresh();
        this.recount();
    };

    state = {
        count: 0,
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

        console.log('start loading');

        this.setState({
            refreshig: true
        });


        console.log('start loading started');


        // queryDocs().then(result => {

        //     console.log("RESULT IS COMMING");
        //     console.log(result);

        //     // this.setstate({ list: result, refreshig: false });
        // }).catch(error => {
        //     // console.log(error);
        // });

        setTimeout(() => {
            this.setState({
                refreshig: false
            });
        }, 1000)
    };

    recount = () => {
        countDocs().then(num => {
            this.setState({ count: num });
        }).catch(error => this.setState(error));
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.state.count}</Text>
                <FlatList
                    removeClippedSubviews={false}
                    refreshing={this.state.refreshig}
                    onRefresh={this.onRefresh}
                    style={{ alignSelf: "stretch" }}
                    data={this.state.list}
                    renderItem={({ item, index }) =>
                        <FlatListItem {...item} itemIndex={index}

                            onPressItem={() => {
                                alert("PRESS");
                            }}

                            onEditItem={() => {
                                this.props.navigation.navigate('EditCrud', item)
                            }}

                            onDeleteItem={() => {
                                alert("DELETE");
                            }}

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