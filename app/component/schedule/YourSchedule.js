import React, {
  useState, useEffect, useContext, useRef,
} from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image, FlatList, LogBox,
} from 'react-native';

import axios from 'axios';
import AddSchedule from './AddSchedule';
import { AuthContext } from '../context';

export default function ItemSchedule() {
  const [yourSchedule, setYourSchedule] = useState([]);
  const [trash, setTrash] = useState();
  const [day, setDay] = useState('monday');
  // const isFocused = useIsFocused();
  const savedCallback = useRef();
  const { storedUserToken, setStoredUserToken } = useContext(AuthContext);
  const { id } = storedUserToken;

  const deleteHandler = () => {
    const url = `http://10.0.2.2:5000/user/schedule/${trash}`;
    axios
      .delete(url)
      .then((response) => {
        const result = response.data;
        const { data } = result;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function callback() {
    const url = `http://10.0.2.2:5000/user/schedule/${id}`;
    axios
      .post(url, { day })
      .then((response) => {
        const result = response.data;
        const { data } = result;
        setYourSchedule(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function refresh() {
      savedCallback.current();
    }
    const idx = setInterval(refresh, 500);
    return () => clearInterval(idx);
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <TouchableOpacity
          onPress={() => setDay('monday')}
        >
          <Text style={day === 'monday' ? styles.scheduleActive : styles.schedule}>Mon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDay('tuesday')}
        >
          <Text style={day === 'tuesday' ? styles.scheduleActive : styles.schedule}>Tue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDay('wednesday')}
        >
          <Text style={day === 'wednesday' ? styles.scheduleActive : styles.schedule}>Wed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDay('thursday')}
        >
          <Text style={day === 'thursday' ? styles.scheduleActive : styles.schedule}>Thu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDay('friday')}
        >
          <Text style={day === 'friday' ? styles.scheduleActive : styles.schedule}>Fri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDay('saturday')}
        >
          <Text style={day === 'saturday' ? styles.scheduleActive : styles.schedule}>Sat</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={yourSchedule}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.itemContainer}>
              <Text style={styles.matkul}>{item.course}</Text>
              <Text style={{ fontSize: 16, color: 'white', marginTop: 10 }}>
                {item.room}
              </Text>
              <View style={{ flex: 2, flexDirection: 'row', marginTop: 5 }}>
                <Text style={{
                  width: '50%', marginRight: 5, fontSize: 16, color: 'white',
                }}
                >
                  {item.lecturer}
                </Text>
                <View style={{ flexDirection: 'row', width: '50%' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 24, height: 24, tintColor: 'white' }} source={require('../../../assets/icons/time-icon.png')} />
                    <Text style={{ marginLeft: 10, fontSize: 16, color: 'white' }}>
                      {item.time}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{ flex: 1, alignItems: 'flex-end' }}
                    onPress={() => {
                      setTrash(item.id);
                      if (trash === item.id) {
                        setTrash();
                      }
                    }}
                  >
                    <Image style={{ width: 24, height: 24, tintColor: 'white' }} source={require('../../../assets/icons/trash-delete-icon.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            { trash === item.id ? (
              <View style={styles.showed}>
                <Text style={{
                  fontSize: 20, color: 'white', fontWeight: 'bold', paddingBottom: 5,
                }}
                >
                  Are you sure ?
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white', width: 50, justifyContent: 'center', alignItems: 'center',
                    }}
                    onPress={deleteHandler}
                  >
                    <Text>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => setTrash()}>
                    <Text>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>
        )}
      />
      <AddSchedule data={{ id, day }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  itemContainer: {
    backgroundColor: '#FD9E00',
    borderRadius: 20,
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    zIndex: 1,
  },
  matkul: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 0.1,
  },
  showed: {
    backgroundColor: '#FED676',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 30,
    marginTop: -30,
    marginBottom: 10,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
