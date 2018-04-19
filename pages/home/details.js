import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class DetailsScreen extends React.Component {

    static navigationOptions = {
        title: 'Details',
    };

    render() {

        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const description = params ? params.description : null;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>description: {JSON.stringify(description)}</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}