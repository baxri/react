import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'SignIn',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Sign in screen</Text>
            </View>
        );
    }
}