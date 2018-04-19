import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class HomeAdminScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home Admin',
        title: 'Home Admin',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Admin Screen</Text>
                <Button
                    title="Go to Details Admin"
                    onPress={() => {
                        this.props.navigation.navigate('DetailsAdmin', {
                            itemId: 86,
                            description: "Hi I am from home admin page :D",
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
