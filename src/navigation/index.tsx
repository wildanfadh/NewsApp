import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import {Dashboard, Bookmark, DetailNews} from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="DetailNews"
            component={DetailNews}
            options={{
              headerTitle: 'Detail News',
              transitionSpec: {open: config, close: config},
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="DetailNews"
          component={DetailNews}
          options={{
            headerTitle: 'Detail News',
            transitionSpec: {open: config, close: config},
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

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

export default Navigation;
