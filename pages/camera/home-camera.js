import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class HomeCameraScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home Camera',
        title: 'Home Camera',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Camera Screen</Text>             

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
