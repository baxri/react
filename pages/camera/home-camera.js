import React from 'react';
import { Button, Image, View, CameraRoll, Vibration } from 'react-native';
import { ImagePicker, FileSystem } from 'expo';

export class HomeCameraScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Image Picker',
        title: 'Camera Image Picker',
    };
    state = {
        image: null,
    };

    render() {
        let { image } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                />
                {image &&
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        );
    }

    _pickImage = async () => {
        // let result = await ImagePicker.launchImageLibraryAsync({
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result.uri);


        if (!result.cancelled) {
            CameraRoll.saveToCameraRoll(result.uri);

           this.setState({ image: result.uri });

            // var newPhoto = `${FileSystem.documentDirectory}/photo.jpg`;

            // FileSystem.moveAsync({
            //     from: result.uri,
            //     to: newPhoto,
            // }).then(() => {
            //     this.setState({ image: newPhoto });
            //     Vibration.vibrate();
            // });

        }
    };
}