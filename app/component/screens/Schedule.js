import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, ScrollView,
} from 'react-native';

const Schedule = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.schedule}>
      <Text style={styles.floor}>3rd Floor</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule_1', { title: 'LAB 301', jadwal: 'jadwal_lab_301' })}>
        <Text style={styles.text}>Room 301</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule_1', { title: 'LAB 302', jadwal: 'jadwal_lab_302' })}>
        <Text style={styles.text}>Room 302</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule_1', { title: 'LAB 303', jadwal: 'jadwal_lab_303' })}>
        <Text style={styles.text}>Room 303</Text>
      </TouchableOpacity>

      <Text style={styles.floor}>4th Floor</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule_1', { title: 'LAB 401', jadwal: 'jadwal_lab_401' })}>
        <Text style={styles.text}>Room 401</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule_1', { title: 'LAB 402', jadwal: 'jadwal_lab_402' })}>
        <Text style={styles.text}>Room 402</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule_1', { title: 'LAB 403', jadwal: 'jadwal_lab_403' })}>
        <Text style={styles.text}>Room 403</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FF',
    flex: 1,
  },
  schedule: {
    alignItems: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    backgroundColor: '#F88409',
    width: '100%',
    margin: 10,
    borderRadius: 50,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
    padding: 12,
    textAlign: 'center',
  },
  floor: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
  },
});

export default Schedule;
