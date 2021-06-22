import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import LoginNavigator from './LoginNavigator';

import { AuthContext } from '../context';

export default function RootStack() {
  return (
    <AuthContext.Consumer>
      {({ storedUserToken }) => (
        <NavigationContainer>
          {storedUserToken
            ? <AppNavigator /> : <LoginNavigator />}
        </NavigationContainer>
      )}

    </AuthContext.Consumer>
  );
}
