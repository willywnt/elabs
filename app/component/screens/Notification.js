import React, { useEffect, useState, useContext } from 'react';
import {
  View, StyleSheet, Text, ScrollView, FlatList, ActivityIndicator, LogBox, TouchableOpacity,
} from 'react-native';

import moment from 'moment';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import { AuthContext } from '../context';

const Notification = () => {
  const isFocused = useIsFocused();
  const [notification, setNotification] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idNotification, setIdNotification] = useState(null);
  const { storedUserToken, setStoredUserToken } = useContext(AuthContext);
  const { id } = storedUserToken;

  const fetchData = () => {
    const url = `http://10.0.2.2:5000/notification/${id}`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        const { data } = result;
        setNotification(data.reverse());
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const readHandler = (idx) => {
    const url = `http://10.0.2.2:5000/notification/read/${idx}`;
    axios
      .post(url)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    readHandler(idNotification);
    fetchData();
  }, [idNotification, isFocused, readHandler(idNotification), fetchData]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.notificationContainer}>
        {isLoading ? (
          <ActivityIndicator
            style={{
              flex: 1, justifyContent: 'center', alignSelf: 'center',
            }}
            size="large"
            color="#F88409"
          />
        )
          : (
            <FlatList
              data={notification}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (

                <TouchableOpacity onPress={() => setIdNotification(item.id)} disabled={item.reading !== 0}>
                  <View style={item.reading === 0 ? styles.notificationUnread : styles.notificationRead}>
                    <View style={styles.header}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.time}>{moment(item.updated_at).fromNow()}</Text>
                    </View>
                    <View style={styles.info}>
                      <Text>{item.text}</Text>
                    </View>
                    {item.reading === 0 ? <View style={styles.indicatorUnread} /> : null}
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        {/* <View style={styles.notificationUnread}>
          <View style={styles.header}>
            <Text style={styles.title}>Admin</Text>
            <Text style={styles.time}>Just Now</Text>
          </View>
          <View style={styles.info}>
            <Text>warning!!!</Text>
            <Text>you get a moderate offense</Text>
          </View>
          <View style={styles.indicatorUnread} />
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
        </View> */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FF',
    flex: 1,
  },
  notificationContainer: {
    marginTop: 10,
    marginBottom: 120,
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
  indicatorUnread: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: '#FFB443',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  info: {
    marginTop: 15,
    paddingRight: 30,
  },
});

export default Notification;
