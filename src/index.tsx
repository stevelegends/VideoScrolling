import React from 'react';

// modules
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// type
import type {StaticParamList} from '@react-navigation/native';

// screens
import {HomeScreen, FeedScreen, ProfileScreen} from './screens';

// components
import {HomeBadge} from './components/tabs';

enum Focused {
  NO,
  YES,
}
const TabIcon = {
  [Focused.YES]: {
    Home: 'information-circle',
    Feed: 'list',
    Profile: 'fish',
  },
  [Focused.NO]: {
    Home: 'information-circle-outline',
    Feed: 'list-outline',
    Profile: 'fish-outline',
  },
};

type TTab = {} & any;

const Tabs = createBottomTabNavigator({
  initialRouteName: 'Profile',
  screenOptions: ({route}) => ({
    tabBarIcon: ({focused, color, size}) => (
      <Ionicons
        name={
          (TabIcon[focused ? Focused.YES : Focused.NO] as TTab)?.[route.name]
        }
        size={size}
        color={color}
      />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      height: 55,
      backgroundColor: 'transparent',
      borderTopWidth: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      elevation: 0,
    },
  }),
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
        tabBarBadge: (<HomeBadge />) as any,
      },
    },
    Feed: FeedScreen,
    Profile: ProfileScreen,
  },
});

const RootStack = createNativeStackNavigator({
  screenOptions: {
    // headerShown: false,
  },
  screens: {
    Tabs: {
      screen: Tabs,
      options: {
        headerShown: false,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
