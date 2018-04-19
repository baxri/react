import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, DrawerNavigator, SwitchNavigator } from 'react-navigation';

import { EntryPointScreen } from './pages/entrypoin';

import { HomeScreen } from './pages/home/home';
import { DetailsScreen } from './pages/home/details';

import { HomeSecondScreen } from './pages/home-second/home-second';
import { DetailsSecondScreen } from './pages/home-second/details-second';

import { HomeAdminScreen } from './pages/home-admin/home-admin';
import { DetailsAdminScreen } from './pages/home-admin/details-admin';

import { SignInScreen } from './pages/signin/singin';
import { HomeCameraScreen } from './pages/camera/home-camera';


// Home menu stack
const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
  });

// Home admin stack
const HomeAdmin = StackNavigator({
  HomeAdmin: {
    screen: HomeAdminScreen,
  },
  DetailsAdmin: {
    screen: DetailsAdminScreen,
  },
}, {
    initialRouteName: 'HomeAdmin',
  });

// Home second stack
const HomeSecondStack = StackNavigator({
  HomeSecond: {
    screen: HomeSecondScreen,
  },
  DetailsSecond: {
    screen: DetailsSecondScreen,
  },

}, {
    initialRouteName: 'HomeSecond',
  });

// user left menu stack check if is admin or not
let isadmin = 0;

if (!isadmin) {
  var menu = {
    Main: {
      screen: HomeStack,
    },
    Second: {
      screen: HomeSecondStack,
    },
    Third: {
      screen: HomeCameraScreen,
    },
  };
} else {
  var menu = {
    Main: {
      screen: HomeAdmin,
    },
    Main1: {
      screen: HomeAdmin,
    },
    Main2: {
      screen: HomeAdmin,
    },
    
  };
}

const DrawerStack = DrawerNavigator(menu);


const RootStack = StackNavigator(
  {
    Main: {
      screen: DrawerStack,
    },
  },
  {
    headerMode: 'none',
  }
);

const AuthStack = StackNavigator({ SignIn: SignInScreen });


export default SwitchNavigator(
  {
    EntryPoint: EntryPointScreen,
    App: RootStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'EntryPoint',
  }
);


// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
