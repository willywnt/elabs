import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import ScheduleScreen from '../screens/Schedule';
import RulesScreen from '../screens/Rules';
import StatusScreen from '../screens/Status';
import BorrowScreen from '../screens/Borrow_1';
import Schedule1 from '../screens/Schedule_1';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={TabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Schedule"
      component={ScheduleScreen}
      options={{
        headerTitleStyle: { alignSelf: 'center', marginLeft: -60, fontSize: 24 },
        title: 'Schedule LAB',
      }}

    />
    <Stack.Screen
      name="Rules"
      component={RulesScreen}
      options={{
        headerTitleStyle: { alignSelf: 'center', marginLeft: -60, fontSize: 24 },
      }}
    />
    <Stack.Screen
      name="Status"
      component={StatusScreen}
      options={{
        headerTitleStyle: { alignSelf: 'center', marginLeft: -60, fontSize: 24 },
      }}
    />
    <Stack.Screen
      name="Borrow_1"
      component={BorrowScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerTitleStyle: { alignSelf: 'center', fontSize: 24 },
      })}
    />
    <Stack.Screen
      name="ChatScreen"
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerTitleStyle: { alignSelf: 'center', marginLeft: -60, fontSize: 24 },
      })}
    />
    <Stack.Screen
      name="Schedule_1"
      component={Schedule1}
      options={({ route }) => ({
        title: route.params.title,
        headerTitleStyle: { alignSelf: 'center', marginLeft: -60, fontSize: 24 },
      })}
    />
  </Stack.Navigator>
);

export default AppNavigator;
