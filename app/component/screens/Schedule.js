import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';

import Screen from '../Screen';

const Schedule = () => {
  const test = '';
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.floor}>3rd Floor</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Room 301</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Room 302</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Room 303</Text>
        </TouchableOpacity>

        <Text style={styles.floor}>4th Floor</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Room 401</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Room 402</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Room 403</Text>
        </TouchableOpacity>

      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
