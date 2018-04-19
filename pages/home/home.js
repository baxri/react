import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              description: "Hi I am from home page :D",
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