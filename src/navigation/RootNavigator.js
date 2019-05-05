import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createSwitchNavigator,
} from 'react-navigation';
import Welcome from '../components/Welcome';

const AppRootNavigator = createSwitchNavigator({
  Welcome: { screen: Welcome }
});

export default AppRootNavigator;
