import React from 'react';
import { Text, View, TouchableOpacity, Button, Vibration } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';

export class CameraScreen extends React.Component {
    static navigationOptions = {
        title: 'Camera',
    };
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
    };

    state = {
        flash: 'off',
        zoom: 0,
        autoFocus: 'on',
        depth: 0,
        type: 'back',
        whiteBalance: 'auto',
        ratio: '16:9',
        ratios: [],
        photoId: 1,
        showGallery: false,
        photos: [],
        faces: [],
        permissionsGranted: false,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    takePicture = async function () {

        console.log("Starting");


        this.camera.takePictureAsync().then(data => {

            var newPhoto = FileSystem.documentDirectory + 'Photo_' + this.state.photoId + '.jpg';
            console.log("Get a photo");

            FileSystem.moveAsync({
                from: data.uri,
                to: newPhoto,
            }).then(() => {

                console.log("Every thing is ok :D");

                this.setState({
                    photoId: this.state.photoId + 1,
                });

                Vibration.vibrate();
                console.log("Vibrate");

                console.log("navigate");
                
                this.props.navigation.navigate('HomeCamera', {
                    photo: newPhoto,
                })

            }).catch((err) => {
                console.log("Error : " + err);
            });
        }).catch(error => {
            console.log(error);
        });
        // Vibration.vibrate();

        console.log("Taking pic" + this.state.photoId);
    }


    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 0.5 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Text
                                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                    {' '}Flip{' '}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                    <Button
                        title="Get Picture"
                        onPress={this.takePicture.bind(this)}
                    />
                </View>
            );
        }
    }
}