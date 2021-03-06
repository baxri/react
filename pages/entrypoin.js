import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text
} from 'react-native';

export class EntryPointScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }
    static navigationOptions = {
        title: 'EntryPoint',
    };

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync =  () => {
        // var userToken = await AsyncStorage.getItem('userToken');
        // userToken = 1;

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // this.props.navigation.navigate(userToken ? 'App' : 'Auth');

        // setTimeout(() => {
        //     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        // }, 1000);

        // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        this.props.navigation.navigate('App');
        };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
                <Text>Loading</Text>
            </View>
        );
    }
}