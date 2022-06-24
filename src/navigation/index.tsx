import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// screens
import {Dashboard, Bookmark} from '../screens';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      nitialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#FC882B',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: 'News App',
          title: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerTitle: 'News App',
          title: 'Bookmark',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bookmark" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
