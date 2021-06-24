import React, { useEffect, useState, useContext } from 'react';
import {
  View, StyleSheet, Text, Image, ScrollView, FlatList, TouchableOpacity, LogBox, ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import { AuthContext } from '../context';
import { auth } from '../../../firebase';

const Profile = () => {
  // const [setting, setSetting] = useState(false);
  const isFocused = useIsFocused();
  const { storedUserToken, setStoredUserToken } = useContext(AuthContext);
  const {
    name, username, avatar, angkatan, deskripsi, id,
  } = storedUserToken;
  const clearLogin = () => {
    AsyncStorage.removeItem('userToken')
      .then(() => {
        setStoredUserToken('');
      })
      .catch((error) => console.log(error));

    auth
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const [status, setStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `http://10.0.2.2:5000/status/${id}`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        const { data } = result;
        const filted = data.filter((item) => item.status_id === 3 || item.status_id === 4);
        setStatus(filted.reverse());
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isFocused]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableHighlight
  //         onPress={() => setSetting((prevSetting) => !prevSetting)}
  //         activeOpacity={0.8}
  //         underlayColor="#B9B9B9"
  //         style={{
  //           width: 40, height: 40, paddingLeft: 0, borderRadius: 40 / 2, justifyContent: 'center', marginRight: 10,
  //         }}
  //       >
  //         <Image
  //           source={require('../../../assets/icons/settings-icon.png')}
  //           resizeMode="contain"
  //           style={{
  //             width: 18,
  //             height: 18,
  //             alignSelf: 'center',
  //             tintColor: 'black',
  //           }}
  //         />
  //       </TouchableHighlight>
  //     ),
  //   });
  // }, [navigation, setSetting]);

  const statusHistory = {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
    elevation: 2,
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <View style={styles.image}>
            <Image
              source={{ uri: `https://elabsupnvj.my.id/laravel/storage/app/public/images/${avatar}` }}
              style={{
                width: 100, height: 100, borderRadius: 27,
              }}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.nim}>{username}</Text>
            <TouchableOpacity onPress={clearLogin}>
              <Text style={{
                marginTop: 10, fontSize: 18, color: 'black',
              }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descContainer}>
          <Text style={{
            color: '#0D253C', fontSize: 18, fontWeight: '600',
          }}
          >
            {angkatan}
          </Text>
          <View style={{
            width: '100%', height: 0.5, backgroundColor: '#0D253C', marginBottom: 10, marginTop: 10,
          }}
          />
          <Text style={{ color: '#2D4379', fontSize: 16 }}>{deskripsi}</Text>
        </View>
      </View>

      <View style={styles.riwayatContainer}>
        <Text style={styles.riwayatTitle}>History</Text>
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
              data={status}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                const color = item.status_id === 3 ? '#1EAE4F' : 'red';
                const statuslab = item.status_id === 3 ? 'Finished' : 'Canceled';
                return (
                  <View style={styles.riwayat}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: '700',
                        letterSpacing: 0.1,
                        marginBottom: 10,
                      }}
                      >
                        {item.id_komputer}
                      </Text>
                      <Text style={{ ...statusHistory, color }}>
                        {statuslab}
                      </Text>
                    </View>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Doing task : </Text>
                    <Text style={{ fontSize: 16, color: 'white', marginBottom: 15 }}>{item.keperluan}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/icons/time-icon.png')} style={{ width: 24, height: 24, tintColor: 'white' }} />
                        <Text style={{ marginLeft: 5, fontSize: 16, color: 'white' }}>{item.jam}</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/icons/calendar-icon.png')} style={{ width: 22, height: 22, tintColor: 'white' }} />
                        <Text style={{ marginLeft: 10, fontSize: 16, color: 'white' }}>{item.tanggal}</Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          )}

      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FF',
    flex: 1,
    marginBottom: 90,
  },
  profileContainer: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    elevation: 1,
    padding: 30,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderColor: '#F88409',
    borderWidth: 1,
    padding: 5,
    borderRadius: 27,
  },
  nameContainer: {
    marginLeft: 20,
  },
  name: {
    color: '#0D253C',
    fontSize: 22,
  },
  nim: {
    color: '#F88409',
    fontSize: 18,
  },
  descContainer: {
    marginTop: 20,
  },
  riwayatContainer: {
    backgroundColor: 'white',
    marginTop: 30,
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingTop: 20,
    paddingBottom: 50,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    elevation: 5,
  },
  riwayatTitle: {
    fontSize: 20,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
  },
  riwayat: {
    backgroundColor: '#FD9E00',
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
});

export default Profile;
