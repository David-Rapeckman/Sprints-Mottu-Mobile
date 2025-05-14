import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';
import TabNavigator from '../navigation/TabNavigator';

import SplashScreen from '../screens/Auth/SplashScreen';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';

import Moto1Screen from '../screens/Vehicles/Moto1Screen';
import Moto2Screen from '../screens/Vehicles/Moto2Screen';
import Moto3Screen from '../screens/Vehicles/Moto3Screen';

import { RootStackParamList } from '../navigation/Types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
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

export default Routes;
