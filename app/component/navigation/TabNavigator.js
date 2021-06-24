import React from 'react';
import {
  Text, View, Image, TouchableHighlight,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ChatScreen from '../screens/Chat';
import BorrowScreen from '../screens/Borrow';
import NotificationScreen from '../screens/Notification';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();
const ChatStack = createStackNavigator();
const BorrowStack = createStackNavigator();
const NotifStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Chat = ({ navigation }) => (
  <ChatStack.Navigator>
    <ChatStack.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        headerTitleStyle: {
          alignSelf: 'center',
          marginLeft: -70,
          fontSize: 24,
        },
        headerLeft: () => (
          <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.8}
            underlayColor="#B9B9B9"
            style={{
              width: 40, height: 40, paddingLeft: 0, borderRadius: 40 / 2, justifyContent: 'center', marginLeft: 10,
            }}
          >
            <Image
              source={require('../../../assets/icons/arrow-icon.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                alignSelf: 'center',
                tintColor: 'black',
              }}
            />
          </TouchableHighlight>
        ),
      }}
    />
  </ChatStack.Navigator>
);

const Borrow = ({ navigation }) => (
  <BorrowStack.Navigator>
    <BorrowStack.Screen
      name="Borrow"
      component={BorrowScreen}
      options={{
        headerTitleStyle: { alignSelf: 'center', marginLeft: -60, fontSize: 24 },
        headerLeft: () => (
          <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.8}
            underlayColor="#B9B9B9"
            style={{
              width: 40, height: 40, paddingLeft: 0, borderRadius: 40 / 2, justifyContent: 'center', marginLeft: 10,
            }}
          >
            <Image
              source={require('../../../assets/icons/arrow-icon.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                alignSelf: 'center',
                tintColor: 'black',
              }}
            />
          </TouchableHighlight>
        ),
      }}
    />
  </BorrowStack.Navigator>
);

const Notification = ({ navigation }) => (
  <NotifStack.Navigator>
    <NotifStack.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        headerTitleStyle: { alignSelf: 'center', marginLeft: -60, fontSize: 24 },
        headerLeft: () => (
          <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.8}
            underlayColor="#B9B9B9"
            style={{
              width: 40, height: 40, paddingLeft: 0, borderRadius: 40 / 2, justifyContent: 'center', marginLeft: 10,
            }}
          >
            <Image
              source={require('../../../assets/icons/arrow-icon.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                alignSelf: 'center',
                tintColor: 'black',
              }}
            />
          </TouchableHighlight>
        ),
      }}
    />
  </NotifStack.Navigator>
);

const Profile = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerTitleStyle: { alignSelf: 'center', marginLeft: -60, fontSize: 24 },
        headerLeft: () => (
          <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.8}
            underlayColor="#B9B9B9"
            style={{
              width: 40, height: 40, paddingLeft: 0, borderRadius: 40 / 2, justifyContent: 'center', marginLeft: 10,
            }}
          >
            <Image
              source={require('../../../assets/icons/arrow-icon.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                alignSelf: 'center',
                tintColor: 'black',
              }}
            />
          </TouchableHighlight>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        position: 'absolute',
        bottom: 0,
        elevation: 5,
        backgroundColor: '#ffffff',
        height: 90,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../../../assets/icons/home-icon.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F88409' : '#7B8BB2',
              }}
            />
            <Text style={{ color: focused ? '#F88409' : '#7B8BB2', fontSize: 14, marginTop: 5 }}>Home</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../../../assets/icons/chat-icon.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F88409' : '#7B8BB2',
              }}
            />
            <Text style={{ color: focused ? '#F88409' : '#7B8BB2', fontSize: 14, marginTop: 5 }}>Chat</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Borrow"
      component={Borrow}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              top: -40,
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              height: 60,
              borderRadius: 60 / 2,
              borderWidth: 5,
              borderColor: '#ffffff',
              backgroundColor: focused ? '#F88409' : '#7B8BB2',
              elevation: 1,
            }}
          >
            <Image
              source={require('../../../assets/icons/borrow-icon.png')}
              resizeMode="contain"
              style={{
                width: 42,
                height: 42,
                marginTop: -3,
                tintColor: '#ffffff',
              }}
            />
            <Text style={{
              color: focused ? '#F88409' : '#7B8BB2', fontSize: 14, position: 'absolute', bottom: -38,
            }}
            >
              Borrow
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../../../assets/icons/notification-icon.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F88409' : '#7B8BB2',
              }}
            />
            <Text style={{ color: focused ? '#F88409' : '#7B8BB2', fontSize: 14, marginTop: 5 }}>Notification</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../../../assets/icons/profile-icon.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F88409' : '#7B8BB2',
              }}
            />
            <Text style={{ color: focused ? '#F88409' : '#7B8BB2', fontSize: 14, marginTop: 5 }}>Profile</Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
