import React from 'react';
import { Text, View, TouchableOpacity, Button, Vibration } from 'react-native';

export class HomeCameraScreen extends React.Component {
    static navigationOptions = {
        title: 'Home Camera',
    };

    render() {

        const { params } = this.props.navigation.state;
        const photo = params ? params.photo : null;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Camera Screen</Text>
                <Text>Photo : {JSON.stringify(params)}</Text>
                <Button
                    title="Take Picture"
                    onPress={() => {
                        this.props.navigation.navigate('Camera');
                    }}
                />
            </View>
        );
    }
}