import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import LocationScreen from '../screens/Home/LocationScreen';
import VehiclesList from '../screens/Vehicles/VehiclesList';
import Moto1Screen from '../screens/Vehicles/Moto1Screen';
import Moto2Screen from '../screens/Vehicles/Moto2Screen';
import Moto3Screen from '../screens/Vehicles/Moto3Screen';

import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack com as telas da aba Vehicles
const VehiclesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="VehiclesList" component={VehiclesList} />
      <Stack.Screen name="Moto1Screen" component={Moto1Screen} />
      <Stack.Screen name="Moto2Screen" component={Moto2Screen} />
      <Stack.Screen name="Moto3Screen" component={Moto3Screen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'ellipse';

          switch (route.name) {
            case 'Location':
              iconName = 'location-outline';
              break;
            case 'Vehicles':
              iconName = 'bicycle-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            case 'Settings':
              iconName = 'settings-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.lightGray,
        tabBarStyle: {
          backgroundColor: colors.green,
          borderTopWidth: 1,
          borderTopColor: colors.lightGray,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Vehicles" component={VehiclesStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
