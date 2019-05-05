import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createSwitchNavigator,
} from 'react-navigation';
import AppDrawerNavigator from './AppDrawerNavigator';
import Welcome from '../components/auth/Welcome';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const AppRootNavigator = createSwitchNavigator({
  Welcome: { screen: Welcome },
  Register: { screen: Register },
  Login: { screen: Login },
  App: { screen: AppDrawerNavigator }
});

export default AppRootNavigator;
