// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';
import TabNavigator from './TabNavigator';

// Auth
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import SplashScreen from '../screens/Auth/SplashScreen';

// Stacks internos (veículos dentro da aba Vehicles)
import Moto1Screen from '../screens/Vehicles/Moto1Screen';
import Moto2Screen from '../screens/Vehicles/Moto2Screen';
import Moto3Screen from '../screens/Vehicles/Moto3Screen';
import VehiclesList from '../screens/Vehicles/VehiclesList';

// Settings/Outras
import TermsScreen from '../screens/Settings/TermsScreen';
import AboutAppScreen from '../screens/Settings/AboutAppScreen';
import HelpCenterScreen from '../screens/Settings/HelpCenterScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

export type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainApp: undefined;
  Moto1Screen: undefined;
  Moto2Screen: undefined;
  Moto3Screen: undefined;
  VehiclesList: undefined;
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
          {/* As telas abaixo continuam acessíveis pelo root se necessário, mas Edit/Change Photo ficam dentro do ProfileStack */}
          <Stack.Screen name="Moto1Screen" component={Moto1Screen} />
          <Stack.Screen name="Moto2Screen" component={Moto2Screen} />
          <Stack.Screen name="Moto3Screen" component={Moto3Screen} />
          <Stack.Screen name="VehiclesList" component={VehiclesList} />
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
