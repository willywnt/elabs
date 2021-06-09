import React from 'react';
import {
  View, Text, StyleSheet, Image, StatusBar,
} from 'react-native';
import Screen from '../Screen';
import CardMenu from '../card/CardMenu';
import ScheduleDays from '../schedule/ScheduleDays';
import AddSchedule from '../schedule/AddSchedule';

export default function Home() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/foto/willy-winata.jpg')} />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>Hi, Willy Winata</Text>
          <Text style={styles.textLets}>Let’s make your schedule.</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Categories</Text>
        <CardMenu />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Your Schedule</Text>
        <ScheduleDays />
      </View>
      <AddSchedule />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FD9E00',
    flexDirection: 'row',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    marginTop: StatusBar.currentHeight,
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
});
