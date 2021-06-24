import React, { useState, useEffect, useContext } from 'react';
import {
  View, StyleSheet, Text, Image, FlatList, LogBox, ActivityIndicator,
} from 'react-native';

import moment from 'moment';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context';

const Status = ({ navigation }) => {
  const timeIcon = {
    width: 22,
    height: 22,
  };
  const statusText = {
    fontSize: 14,
    fontWeight: 'bold',
  };
  const stat = {
    position: 'absolute',
    right: 20,
    top: '40%',
    backgroundColor: '#C4C4C4',
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
  };
  const timeText = {
    marginLeft: 5,
    fontSize: 14,
  };
  const lab = {
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: '35%',
  };
  const text = {
    fontSize: 14,
    marginTop: 2,
    paddingRight: '35%',
  };
  const colorWaiting = '#F88409';
  const colorAccepted = '#1EAE4F';

  const [status, setStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { storedUserToken, setStoredUserToken } = useContext(AuthContext);
  const { id } = storedUserToken;

  useEffect(() => {
    const url = `http://10.0.2.2:5000/status/${id}`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        const { data } = result;
        const filted = data.filter((item) => item.status_id === 1 || item.status_id === 2);
        setStatus(filted);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <View style={styles.container}>
      { isLoading ? (
        <ActivityIndicator
          style={{
            flex: 1, justifyContent: 'center', alignItems: 'center',
          }}
          size="large"
          color="#F88409"
        />
      ) : status.length === 0 ? (
        <View style={{
          flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 150,
        }}
        >
          <Image source={require('../../../assets/no-status.png')} style={{ resizeMode: 'cover', alignSelf: 'center' }} />
          <Text style={{
            textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginTop: 25,
          }}
          >
            No Status Found
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 15 }}>
            We didn't found any status on your borrowing
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 16 }}>
            "Lets choose your LAB"
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#FD9E00', alignSelf: 'center', marginTop: 30, paddingHorizontal: 16, paddingVertical: 10, elevation: 3, borderRadius: 5,
            }}
            onPress={() => navigation.navigate('Borrow')}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Start Borrowing</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <FlatList
        data={status}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const created = moment(item.created_at).fromNow();
          const updated = moment(item.updated_at).fromNow();

          const color = item.status_id === 1 ? colorWaiting : colorAccepted;
          const statuslab = item.status_id === 1 ? 'Waiting' : 'Accepted';
          return (
            <View style={styles.statusContainer}>
              <View style={styles.timeContainer}>
                <Image style={{ ...timeIcon, tintColor: color }} source={require('../../../assets/icons/time-icon.png')} />
                <Text style={{ ...timeText, color }}>{item.jam}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                <Text style={{ ...lab, color }}>{item.ruangan}</Text>
                <Text style={{ ...lab, color }}>{item.id_komputer}</Text>
              </View>
              <View style={{ marginBottom: 8 }}>
                <Text style={{ ...text, color, fontWeight: 'bold' }}>Doing Task :</Text>
                <Text style={{ ...text, color }}>{item.keperluan}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...text, color, fontWeight: 'bold' }}>
                  Created :
                  <Text style={{ ...text, color, fontWeight: '600' }}>
                    {' '}
                    {created}
                  </Text>
                </Text>

              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...text, color, fontWeight: 'bold' }}>
                  Updated :
                  <Text style={{ ...text, color, fontWeight: '600' }}>
                    {' '}
                    {updated}
                  </Text>
                </Text>

              </View>
              <View style={{ ...stat, backgroundColor: color }}>
                <Text style={{ ...statusText, color: 'white' }}>
                  {statuslab}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FF',
    flex: 1,
  },
  statusContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 30,
  },
  timeContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
});

export default Status;
