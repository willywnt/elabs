import React, { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import RootStack from './app/component/navigation/RootStack';
import { AuthContext } from './app/component/context';

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedUserToken, setStoredUserToken] = useState();

  const checkLoginUserToken = () => {
    AsyncStorage
      .getItem('userToken')
      .then((result) => {
        if (result !== null) {
          setStoredUserToken(JSON.parse(result));
        } else {
          setStoredUserToken(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appReady) {
    return (
      <AppLoading
        startAsync={checkLoginUserToken}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <AuthContext.Provider value={{ storedUserToken, setStoredUserToken }}>
      <RootStack />
    </AuthContext.Provider>
  );
}
