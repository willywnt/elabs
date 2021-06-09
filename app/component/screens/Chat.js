import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Screen from '../Screen';

const Chat = () => (
  <Screen>
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}
    >
      <Text style={styles.text}>Chat</Text>
    </View>
  </Screen>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Chat;
