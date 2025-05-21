// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';
import SplashScreen from '../screens/Auth/SplashScreen';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import TabNavigator from './TabNavigator';
import Moto1Screen from '../screens/Vehicles/Moto1Screen';
import Moto2Screen from '../screens/Vehicles/Moto2Screen';
import Moto3Screen from '../screens/Vehicles/Moto3Screen';

export type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainApp: undefined;
  Moto1Screen: undefined;
  Moto2Screen: undefined;
  Moto3Screen: undefined;
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
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
