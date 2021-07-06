import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import OnboardingScreen from '../screens/OnboardingScreen';

const RootStack = createStackNavigator();

export default function LoginNavigator({ isSignout }) {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          animationTypeForReplace: isSignout ? 'pop' : 'push',
        }}
      />
    </RootStack.Navigator>
  );
}
