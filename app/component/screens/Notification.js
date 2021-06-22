import React from 'react';
import {
  View, StyleSheet, Text, ScrollView,
} from 'react-native';

const Notification = () => (
  <ScrollView style={styles.container}>
    <View style={styles.notificationContainer}>
      <View style={styles.notificationUnread}>
        <View style={styles.header}>
          <Text style={styles.title}>Admin</Text>
          <Text style={styles.time}>Just Now</Text>
        </View>
        <View style={styles.info}>
          <Text>warning!!!</Text>
          <Text>you get a moderate offense</Text>
        </View>
        <View style={{
          width: 24,
          height: 24,
          borderRadius: 24,
          backgroundColor: '#FFB443',
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}
        />
      </View>
      <View style={styles.notificationRead}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>System message</Text>
            <Text style={styles.time}>1 hour ago</Text>
          </View>
          <View style={styles.info}>
            <Text>Please update your profile</Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FF',
    flex: 1,
  },
  notificationContainer: {
    marginTop: 10,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  notificationUnread: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FED676',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationRead: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#FED676',
    borderWidth: 2,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  info: {
    marginTop: 15,
  },
});

export default Notification;
