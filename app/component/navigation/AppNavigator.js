import * as React from 'react';
// import {
//   StatusBar,
// } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import ScheduleScreen from '../screens/Schedule';
import RulesScreen from '../screens/Rules';
import StatusScreen from '../screens/Status';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
    <Stack.Screen
      name="Schedule"
      component={ScheduleScreen}
      options={{
        headerTitleStyle: { alignSelf: 'center', marginLeft: -70, fontSize: 24 },
        title: 'Schedule LAB',
      }}

    />
    <Stack.Screen
      name="Rules"
      component={RulesScreen}
      options={{
        headerTitleStyle: { alignSelf: 'center', marginLeft: -70, fontSize: 24 },
      }}
    />
    <Stack.Screen
      name="Status"
      component={StatusScreen}
      options={{
        headerTitleStyle: { alignSelf: 'center', marginLeft: -70, fontSize: 24 },
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
