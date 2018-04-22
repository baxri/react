import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export class EditCrudScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Edit Crud',
    };

    state = {
        id: 0,
        name: '',
    };

    saveUser() {
        alert(this.state.name);
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    render() {

        const { params } = this.props.navigation.state;

        this.state.id = params ? params.id : 0;
        this.state.name = params ? params.name : '';

        return (
            <View style={{ flex: 1 }}>
                <FormLabel>Name</FormLabel>
                <FormInput
                    onChange={this.handleChange.bind(this)}
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