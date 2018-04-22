// https://react-native-training.github.io/react-native-elements/docs/0.19.0/forms.html


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
import { HomeCalendarScreen } from './pages/calendar/home-calendar';

import { HomeCrudScreen } from './pages/home-crud/home-crud';
import { DetailsCrudScreen } from './pages/home-crud/details-crud';
import { EditCrudScreen } from './pages/home-crud/edit-crud';

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


// Crud stack
const HomeCrudStack = StackNavigator({
  HomeCrud: {
    screen: HomeCrudScreen,
  },
  DetailsCrud: {
    screen: DetailsCrudScreen,
  },
  EditCrud: {
    screen: EditCrudScreen,
  },

}, {
    initialRouteName: 'HomeCrud',
  });


// Camera stack
const HomeCameraStack = StackNavigator({
  HomeCamera: {
    screen: HomeCameraScreen,
  },

}, {
    initialRouteName: 'HomeCamera',
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
      screen: HomeCameraStack,
    },
    Four: {
      screen: HomeCalendarScreen,
    },
    Five: {
      screen: HomeCrudStack,
    },
  };
} else {
  var menu = {
    Main: {
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
