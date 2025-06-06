// src/navigation/AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '@screens/Profile/ProfileScreen';
import VehiclesList from '@screens/Vehicles/VehiclesList';
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import SplashScreen from '../screens/Auth/SplashScreen';
import ChangePhotoScreen from '../screens/Profile/ChangePhotoScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import AboutAppScreen from '../screens/Settings/AboutAppScreen';
import HelpCenterScreen from '../screens/Settings/HelpCenterScreen';
import TermsScreen from '../screens/Settings/TermsScreen';
import Moto1Screen from '../screens/Vehicles/Moto1Screen';
import Moto2Screen from '../screens/Vehicles/Moto2Screen';
import Moto3Screen from '../screens/Vehicles/Moto3Screen';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainApp: undefined;
  Moto1Screen: undefined;
  Moto2Screen: undefined;
  Moto3Screen: undefined;
  VehiclesList: undefined;
  ChangePhotoScreen: undefined;
  EditProfileScreen: undefined;
  TermsScreen: undefined;
  AboutAppScreen: undefined;
  HelpCenterScreen: undefined;
  ProfileScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="MainApp" component={TabNavigator} />
          <Stack.Screen name="Moto1Screen" component={Moto1Screen} />
          <Stack.Screen name="Moto2Screen" component={Moto2Screen} />
          <Stack.Screen name="Moto3Screen" component={Moto3Screen} />
          <Stack.Screen name="VehiclesList" component={VehiclesList} />
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
          <Stack.Screen name="ChangePhotoScreen" component={ChangePhotoScreen} />
          <Stack.Screen name="TermsScreen" component={TermsScreen} />
          <Stack.Screen name="AboutAppScreen" component={AboutAppScreen} />
          <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
