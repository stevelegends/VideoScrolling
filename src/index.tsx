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

const getIcons = (focus: boolean, name: string) => {
  return {
    Home: focus ? 'information-circle' : 'information-circle-outline',
    Feed: focus ? 'list' : 'list-outline',
    Profile: focus ? 'fish' : 'fish-outline',
  }[name];
};

const Tabs = createBottomTabNavigator({
  screenOptions: ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName = getIcons(focused, route.name);
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      height: 65,
    },
  }),
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
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
