import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LocationScreen from '../screens/Home/LocationScreen';
import VehiclesList from '../screens/Vehicles/VehiclesList';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'ellipse';
          if (route.name === 'Location') iconName = 'location';
          else if (route.name === 'Vehicles') iconName = 'bicycle';
          else if (route.name === 'Profile') iconName = 'person';
          else if (route.name === 'Settings') iconName = 'settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
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
