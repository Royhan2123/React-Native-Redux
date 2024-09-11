/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../main_content/home_screen';
import SearchScreen from '../main_content/search_screen';
import AccountScreen from '../main_content/account_screen';
import {Image, Text} from 'react-native';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          const iconSize = 25;

          if (route.name === 'Home') {
            iconName = require('../../../assets/icons/home.png');
          } else if (route.name === 'Search') {
            iconName = require('../../../assets/icons/search.png');
          } else if (route.name === 'Account') {
            iconName = require('../../../assets/icons/user.png');
          }

          return (
            <Image
              source={iconName}
              style={{width: iconSize, height: iconSize, tintColor: color}}
            />
          );
        },
        tabBarActiveTintColor: 'cyan',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: ({focused}) => {
          const label = route.name;

          return focused ? (
            <Text style={{color: 'cyann', fontSize: 13}}>{label}</Text>
          ) : null;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
