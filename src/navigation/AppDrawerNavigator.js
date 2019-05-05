import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import Results from '../components/tournaments/Results';
import Schedule from '../components/tournaments/Schedule';
import About from '../components/tournaments/About';

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppBottomTabNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      drawerLabel: 'Results',
      drawerIcon: ({tintColor}) => (
        <Icon name="ios-stats" color={tintColor} size={24}/>
      )
    }
  },
  Schedule: {
    screen: Schedule,
    navigationOptions: {
      drawerLabel: 'Schedule',
      drawerIcon: ({tintColor}) => (
        <Icon name="ios-calendar" color={tintColor} size={24}/>
      )
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      drawerLabel: 'About',
      drawerIcon: ({tintColor}) => (
        <Icon name="ios-information-circle" color={tintColor} size={24}/>
      )
    }
  }
},{
  contentOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#acacac',
  }
});

export default AppDrawerNavigator;
