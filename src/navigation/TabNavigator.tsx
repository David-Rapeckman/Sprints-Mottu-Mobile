// src/navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import LocationScreen from '../screens/Home/LocationScreen';
import VehiclesList from '../screens/Vehicles/VehiclesList';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        headerTitleAlign: 'center',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Location':
              iconName = 'location';
              break;
            case 'Vehicles':
              iconName = 'bicycle';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Vehicles" component={VehiclesList} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
