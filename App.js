import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { useFonts } from 'expo-font';

export default function App() {
  // const [loaded] = useFonts({
  //   Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
  // });
  
  // if (!loaded) {
  //   return null;
  // }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Aplikasi Pertama menggunakan Framework React Native</Text>
        <Text style={styles.title}>Ubah</Text>
      </View>
      <View style={styles.body}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header:{
    backgroundColor: '#F88409',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    position:'absolute',
    top:0,
  },
  title:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
