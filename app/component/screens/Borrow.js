import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, ScrollView,
} from 'react-native';

const Borrow = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.borrow}>
      <Text style={styles.floor}>3rd Floor</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Borrow_1', { title: 'Komputer 301', komputer: 'komputer_301', lab: 'LAB 301' })}>
        <Text style={styles.text}>Room 301</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Borrow_1', { title: 'Komputer 302', komputer: 'komputer_302', lab: 'LAB 302' })}>
        <Text style={styles.text}>Room 302</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Borrow_1', { title: 'Komputer 303', komputer: 'komputer_303', lab: 'LAB 303' })}>
        <Text style={styles.text}>Room 303</Text>
      </TouchableOpacity>

      <Text style={styles.floor}>4th Floor</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Borrow_1', { title: 'Komputer 401', komputer: 'komputer_401', lab: 'LAB 401' })}>
        <Text style={styles.text}>Room 401</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Borrow_1', { title: 'Komputer 402', komputer: 'komputer_402', lab: 'LAB 402' })}>
        <Text style={styles.text}>Room 402</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Borrow_1', { title: 'Komputer 403', komputer: 'komputer_403', lab: 'LAB  403' })}>
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
  borrow: {
    alignItems: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 120,
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

export default Borrow;
