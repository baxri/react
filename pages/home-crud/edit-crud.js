import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import { addDoc } from '../../database';

export class EditCrudScreen extends React.Component {

    static navigationOptions = {
        title: 'Edit Crud',
    };

    state = {
        id: 0,
        name: '',
    };

    constructor(props) {
        super(props)

        const { params } = this.props.navigation.state;
        this.state = params ? params : 0;
    }

    saveUser() {
        console.log("Adding:", this.state.name);

        addDoc(this.state.name).then(result => {
            console.log(result);

            queryDocs().then(result => {
                // console.log(result);
            }).catch(error => {
                // console.log(error);
            });

        }).catch(error => {
            console.log(error);
        });



    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FormLabel>Name</FormLabel>
                <FormInput
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />

                <Button
                    large
                    iconRight={{ name: 'code' }}
                    title={this.state.name}
                    onPress={() => {
                        this.saveUser()
                    }} />
            </View>
        );
    }
}