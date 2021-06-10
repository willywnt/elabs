import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/component/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
