import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

const Screen = ({ children }) => <ScrollView style={styles.container}>{children}</ScrollView>;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FF',
    marginBottom: 90,
    flex: 1,
  },
});

export default Screen;
