import React, { useState, useContext } from 'react';
import {
  Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions, ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik';
import axios from 'axios';
import KeyboardAvoidingWrapper from '../KeyboardAvoidingWrapper';

import { AuthContext } from '../context';

const Login = () => {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const { storedUserToken, setStoredUserToken } = useContext(AuthContext);

  const [isHide, setIsHide] = useState(true);
  const [textShow, setTextShow] = useState(false);

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'http://10.0.2.2:5000/login';
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;
        if (status !== 'SUCCESS') {
          handleMessage(message, status);
        } else {
          persistLogin(data, message, status);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
        handleMessage('An error occurred. Check your network and try again');
      });
  };

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  };

  const persistLogin = (credentials, message, status) => {
    AsyncStorage
      .setItem('userToken', JSON.stringify(credentials))
      .then(() => {
        handleMessage(message, status);
        setStoredUserToken(credentials);
      })
      .catch((error) => {
        console.log(error);
        handleMessage('Persisting login failed');
      });
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={{ flex: 1, backgroundColor: '#F4F7FF' }}>
        <View>
          <Animatable.Image animation="bounceIn" source={require('../../../assets/elab.png')} style={styles.image} />
          <Animatable.View animation="fadeInUpBig" style={styles.oren}>
            <Text style={styles.login}>LOG IN</Text>
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" style={styles.putih}>
            <Formik
              initialValues={{ username: '', password: '' }}
              onSubmit={(values, { setSubmitting }) => {
                if (values.username === '' || values.password === '') {
                  handleMessage('Please fill all the fields');
                  setSubmitting(false);
                } else {
                  handleLogin(values, setSubmitting);
                }
              }}
            >
              {({
                handleChange, handleBlur, handleSubmit, values, isSubmitting,
              }) => (
                <View style={{
                  paddingTop: 30, width: '80%', marginLeft: 'auto', marginRight: 'auto',
                }}
                >
                  <Text style={{
                    fontSize: 24, fontWeight: 'bold', color: '#0D253C',
                  }}
                  >
                    Welcome back
                  </Text>
                  <Text style={{
                    fontSize: 16, lineHeight: 28, color: '#2D4379',
                  }}
                  >
                    Sign in with your account
                  </Text>
                  <Text style={{
                    fontSize: 16, lineHeight: 28, color: '#2D4379', marginTop: 30,
                  }}
                  >
                    ID Username
                  </Text>
                  <TextInput
                    style={{
                      width: '100%',
                      borderWidth: 1,
                      borderColor: 'white',
                      borderBottomColor: '#D9DFEB',
                      height: 30,
                      fontSize: 16,
                    }}
                    placeholder="ID/NRP/NIM"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 28,
                      color: '#2D4379',
                      marginTop: 20,
                    }}
                  >
                    Password
                  </Text>
                  <View>
                    <TextInput
                      style={{
                        width: '100%',
                        borderWidth: 1,
                        borderColor: 'white',
                        borderBottomColor: '#D9DFEB',
                        height: 30,
                        fontSize: 16,
                        paddingRight: 50,

                      }}
                      placeholder="* * * * * * *"
                      secureTextEntry={isHide}
                      onBlur={handleBlur('password')}
                      textContentType="password"
                      onChangeText={handleChange('password')}
                      value={values.password}
                    />
                    <TouchableOpacity
                      style={{
                        position: 'absolute', right: 0, bottom: 10,
                      }}
                      onPress={() => { setTextShow(!textShow); setIsHide(!isHide); }}
                    >
                      {textShow === false ? (
                        <Text>
                          SHOW
                        </Text>
                      ) : (
                        <Text>
                          HIDE
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  <Text style={messageType === 'SUCCESS' ? styles.msgTextSuccess : styles.msgTextFail}>{message}</Text>
                  {!isSubmitting && (
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleSubmit}
                  >
                    <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>LOGIN</Text>
                  </TouchableOpacity>
                  )}
                  {isSubmitting && (
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    disabled
                  >
                    <ActivityIndicator size="large" color="white" />
                  </TouchableOpacity>
                  )}

                </View>
              )}
            </Formik>
          </Animatable.View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
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
    elevation: 5,
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
    elevation: 5,
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
  msgTextSuccess: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: 'green',
  },
  msgTextFail: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: 'red',
  },
});

export default Login;
