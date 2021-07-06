import React from 'react';
import {
  Image, View, Text, TouchableOpacity,
} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const skipBtn = ({ ...props }) => (
  <TouchableOpacity
    {...props}
  >
    <Text style={{
      color: '#F88409', fontSize: 16, marginLeft: 20, fontWeight: 'bold', letterSpacing: 1,
    }}
    >
      Skip
    </Text>
  </TouchableOpacity>
);
const nextBtn = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Text style={{
      color: 'white',
      fontSize: 16,
      marginRight: 10,
      letterSpacing: 1,
      backgroundColor: '#F88409',
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 10,
      fontWeight: 'bold',
    }}
    >
      Next
    </Text>
  </TouchableOpacity>
);
const doneBtn = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Text style={{
      color: 'white',
      fontSize: 16,
      marginRight: 10,
      letterSpacing: 1,
      backgroundColor: '#F88409',
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 10,
      fontWeight: 'bold',
    }}
    >
      Get Started
    </Text>
  </TouchableOpacity>
);
const dots = ({ selected }) => (
  <View
    style={{
      width: selected ? 28 : 10,
      height: 10,
      backgroundColor: '#F88409',
      opacity: selected ? 1 : 0.4,
      borderColor: selected ? null : '#FED676',
      borderWidth: selected ? 0 : 1,
      borderRadius: 10,
      marginHorizontal: 3,
    }}
  />
);

export default function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      SkipButtonComponent={skipBtn}
      NextButtonComponent={nextBtn}
      DoneButtonComponent={doneBtn}
      DotComponent={dots}
      onSkip={() => navigation.replace('LoginScreen')}
      onDone={() => navigation.replace('LoginScreen')}
      bottomBarColor="white"
      titleStyles={{
        color: '#F88409',
        fontSize: 30,
        letterSpacing: 1,
        fontWeight: 'bold',
        marginTop: -50,
      }}
      subTitleStyles={{
        color: 'black',
        opacity: 0.6,
        fontSize: 16,
        fontWeight: '600',
      }}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../../assets/onboarding_1.png')} style={{ width: '80%', resizeMode: 'contain', marginTop: -50 }} />,
          title: 'BOOK COMPUTER',
          subtitle: 'This application makes it easy for you to borrow a computer',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../../assets/onboarding_2.png')} style={{ width: '80%', resizeMode: 'contain', marginTop: -50 }} />,
          title: 'MAKE A LIST',
          subtitle: 'You can also make your own schedule',
        },

      ]}
    />
  );
}
