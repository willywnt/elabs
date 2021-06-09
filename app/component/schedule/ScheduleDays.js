import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

export default function ScheduleDays() {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.dayContainer}>
      <TouchableOpacity
        onPress={() => setActive(0)}
      >
        <Text style={active === 0 ? styles.scheduleActive : styles.schedule}>Mon</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive(1)}
      >
        <Text style={active === 1 ? styles.scheduleActive : styles.schedule}>Tue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive(2)}
      >
        <Text style={active === 2 ? styles.scheduleActive : styles.schedule}>Wed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive(3)}
      >
        <Text style={active === 3 ? styles.scheduleActive : styles.schedule}>Thu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive(4)}
      >
        <Text style={active === 4 ? styles.scheduleActive : styles.schedule}>Fri</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive(5)}
      >
        <Text style={active === 5 ? styles.scheduleActive : styles.schedule}>Sat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  schedule: {
    color: 'black',
    opacity: 0.3,
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleActive: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
