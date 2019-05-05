import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import Home from '../components/Home';
import Players from '../components/players/Players';
import Announcements from '../components/announcements/Announcements';
import Profile from '../components/profile/Profile';
import ProfileEdit from '../components/profile/ProfileEdit';
import UserTournamentsAdd from '../components/profile/tournaments/UserTournamentsAdd';


const ProfileStackNavigator = createStackNavigator({
  Profile: { screen: Profile },
  ProfileEdit: { screen: ProfileEdit },
  UserTournamentsAdd: { screen: UserTournamentsAdd }
},{
  navigationOptions: ({ navigation}) => {
    return{
      header: null
    }
  }
});

const AppBottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Players: {
    screen: Players,
    navigationOptions: {
      tabBarLabel: 'PLAYERS',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-contacts" color={tintColor} size={24}/>
      )
    }
  },
  Announcements: {
    screen: Announcements,
    navigationOptions: {
      tabBarLabel: 'ANNOUNCEMENTS',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-mic" color={tintColor} size={24}/>
      )
    }
  },
  Profile: {
    screen: ProfileStackNavigator,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" color={tintColor} size={24}/>
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    labelStyle: {
      fontSize: 8
    }
  },
});

export default AppBottomTabNavigator;
