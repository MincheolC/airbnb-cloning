import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import Explore from './screens/Explore';
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'
import Profile from './screens/Profile'

const TabNavigator = createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-heart" color={tintColor} size={24} />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-heart" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-person" color={tintColor} size={24} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
