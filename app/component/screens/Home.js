import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, Image, StatusBar, ScrollView,
} from 'react-native';

import CardMenu from '../card/CardMenu';
import YourSchedule from '../schedule/YourSchedule';

import { AuthContext } from '../context';

export default function Home() {
  const { storedUserToken, setStoredUserToken } = useContext(AuthContext);
  const { name, avatar } = storedUserToken;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: `https://elabsupnvj.my.id/laravel/storage/app/public/images/${avatar}` }} />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>
            Hi,
            {name}
          </Text>
          <Text style={styles.textLets}>Let’s make your schedule.</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Categories</Text>
        <CardMenu />
      </View>
      <View style={styles.contentContainer}>
        <Text style={{
          fontSize: 20,
          color: '#1E1C61',
          fontWeight: 'bold',
        }}
        >
          Your Schedule
        </Text>
      </View>
      <View style={styles.scheduleContainer}>
        <YourSchedule />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FF',
    flex: 1,
    marginBottom: 90,
  },
  header: {
    marginTop: StatusBar.currentHeight,
    padding: 20,
    backgroundColor: '#FD9E00',
    flexDirection: 'row',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginRight: 20,
    marginTop: 10,
  },
  textContainer: {
    justifyContent: 'center',

  },
  textName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',

  },
  textLets: {
    color: 'white',
    fontSize: 28,
    marginTop: 5,
    width: '70%',
    fontWeight: 'normal',
    flexShrink: 1,
  },
  contentContainer: {
    marginTop: 30,
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    color: '#1E1C61',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scheduleContainer: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20,
    marginBottom: 40,
  },
});
