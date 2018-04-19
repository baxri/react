import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
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
    _bootstrapAsync = async () => {
        var userToken = await AsyncStorage.getItem('userToken');
        userToken = 1;

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // this.props.navigation.navigate(userToken ? 'App' : 'Auth');

        setTimeout(() => {
            this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        }, 2000);

    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}