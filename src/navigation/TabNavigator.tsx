import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import LocationScreen from '../screens/Home/LocationScreen';
import VehiclesList from '../screens/Vehicles/VehiclesList';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import Moto1Screen from '../screens/Vehicles/Moto1Screen';
import Moto2Screen from '../screens/Vehicles/Moto2Screen';
import Moto3Screen from '../screens/Vehicles/Moto3Screen';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator();
const VehiclesStack = createNativeStackNavigator();

const VehiclesStackNavigator = () => (
  <VehiclesStack.Navigator screenOptions={{ headerShown: false }}>
    <VehiclesStack.Screen name="VehiclesList" component={VehiclesList} />
    <VehiclesStack.Screen name="Moto1Screen" component={Moto1Screen} />
    <VehiclesStack.Screen name="Moto2Screen" component={Moto2Screen} />
    <VehiclesStack.Screen name="Moto3Screen" component={Moto3Screen} />
  </VehiclesStack.Navigator>
);

const TabNavigator = () => (
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
    <Tab.Screen name="Vehicles" component={VehiclesStackNavigator} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
