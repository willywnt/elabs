import React from 'react';
import {
  Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions,
} from 'react-native';
import Screen from '../Screen';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Screen>
      <View>
        <Image source={require('../../../assets/elab.png')} style={styles.image} />
        <View style={styles.oren}>
          <Text style={styles.login}>LOG IN</Text>
        </View>
        <View style={styles.putih}>
          <View style={{
            paddingTop: 30, paddingLeft: 40, flex: 1, paddingRight: 40,
          }}
          >
            <Text style={{
              fontSize: 24, fontWeight: 'bold', color: '#0D253C', fontFamily: 'sans-serif-light',
            }}
            >
              Welcome back
            </Text>
            <Text style={{
              fontSize: 14, lineHeight: 28, color: '#2D4379', fontFamily: 'sans-serif',
            }}
            >
              Sign in with your account
            </Text>
            <Text style={{
              fontSize: 14, lineHeight: 28, color: '#2D4379', fontFamily: 'sans-serif',
            }}
            >
              ID Username
            </Text>
            <TextInput
              style={{
                width: 295,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: 'white',
                borderBottomColor: '#D9DFEB',
                height: 30,
                fontSize: 16,

              }}
              placeholder="ID/NRP/NIM"
            />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 28,
                color: '#2D4379',
                fontFamily: 'sans-serif',
              }}
            >
              Password
            </Text>
            <TextInput
              style={{
                width: 295,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: 'white',
                borderBottomColor: '#D9DFEB',
                height: 30,
                fontSize: 16,

              }}
              placeholder="********"
              secureTextEntry
              autoCapitalize="none"
              textContentType="password"
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={}>
              <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    top: 30,
    height: 45,
    backgroundColor: '#FD9E00',
    borderRadius: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  login: {
    width: '100%',
    height: '80%',
    lineHeight: 10,
    color: 'white',
    fontSize: 25,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  oren: {
    top: 100,
    width: Dimensions.get('window').width,
    height: 96,
    backgroundColor: '#FD9E00',
    shadowColor: '#4e5876',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 22,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  putih: {
    top: 60,
    width: Dimensions.get('window').width,
    height: 575,
    backgroundColor: 'white',
    shadowColor: '#4e85ff',
    shadowOffset: { width: 0, height: -5 },
    shadowRadius: 32,
    borderRadius: 28,
  },
  image: {
    top: 65,
    width: 205,
    left: '25%',
    height: 72,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 8,
  },
});

export default Login;
