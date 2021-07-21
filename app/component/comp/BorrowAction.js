import React, { useState, useContext } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Modal, Image, TextInput, Alert,
} from 'react-native';

import axios from 'axios';
import { AuthContext } from '../context';

export default function BorrowAction({ data }) {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(false);
  const [lastData, setLastData] = useState({});
  const [keperluan, setKeperluan] = useState('');
  const day = new Date().getDate();
  const { storedUserToken, setStoredUserToken } = useContext(AuthContext);
  const { id } = storedUserToken;

  const dataInsert = { ...data, userId: id, keperluan };
  const addBorrowHandler = () => {
    if (Object.keys(dataInsert.jam).every((x) => dataInsert.jam[x] === '' || dataInsert.jam[x] === null) === true) {
      Alert.alert('DO NOT EMPTY!', 'Please select time...', [
        { text: 'OKE' },
      ]);
    } else if (typeof dataInsert.compId === 'undefined') {
      Alert.alert('DO NOT EMPTY!', 'Please select computer...', [
        { text: 'OKE' },
      ]);
    } else if (Object.keys(dataInsert.keperluan).every((x) => dataInsert.keperluan[x] === '' || dataInsert.keperluan[x] === null) === true) {
      Alert.alert('DO NOT EMPTY!', 'Please input necessary...', [
        { text: 'OKE' },
      ]);
    } else if (lastData.id === dataInsert.id) {
      Alert.alert('COMPUTER FULL!', 'Please choose another computer...', [
        { text: 'OKE' },
      ]);
    } else {
      const url = 'http://10.0.2.2:5000/borrow';
      axios
        .post(url, dataInsert)
        .then((response) => {
          setLastData(dataInsert);
          setShow(true);
          setTimeout(() => {
            setInfo(true);
          }, 2500);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.borrowContainer}>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{data.ruangan}</Text>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 20,
      }}
      >
        <View style={styles.info}>
          <Text style={styles.textUp}>{day}</Text>
          <Text style={styles.textDown}>Date</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textUp}>{data.jam}</Text>
          <Text style={styles.textDown}>Hour</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textUp}>{data.compId}</Text>
          <Text style={styles.textDown}>Computer</Text>
        </View>
      </View>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
        Necessary :
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setKeperluan(text)}
        placeholder="input necessary"
        placeholderTextColor="black"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={addBorrowHandler}
      >
        <Text style={{ color: '#FD9E00', fontSize: 28, fontWeight: '700' }}>BORROW</Text>
      </TouchableOpacity>
      <Modal
        transparent
        visible={show}
        animationType="fade"
      >
        <View style={{
          backgroundColor: '#000000aa', flex: 1, justifyContent: 'center',
        }}
        >
          <View style={{
            backgroundColor: 'white', margin: 30, padding: 20, borderRadius: 20, elevation: 5,
          }}
          >
            <Image
              source={require('../../../assets/icons/check-animation.gif')}
              style={{
                width: 300, height: 300, alignSelf: 'center', marginTop: -20,
              }}
              resizeMode="cover"
            />
            {info ? (
              <View style={{ alignItems: 'center' }}>
                <Text style={{
                  color: '#414141', fontSize: 34, fontWeight: '700', marginTop: -70,
                }}
                >
                  Successful state!
                </Text>
                <Text style={{
                  fontSize: 16, color: '#818181', fontWeight: '700', marginTop: 20,
                }}
                >
                  Wait confirm from admin
                </Text>
                <Text style={{
                  fontSize: 16, color: '#818181', fontWeight: '700', marginBottom: 20,
                }}
                >
                  Have a good study
                </Text>
                <TouchableOpacity
                  onPress={() => { setShow(false); setInfo(false); }}
                  style={{
                    backgroundColor: '#FD9E00', padding: 20, paddingTop: 15, paddingBottom: 15, borderRadius: 10,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: '700', color: 'white' }}>OK</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  borrowContainer: {
    backgroundColor: '#FD9E00',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingTop: '5%',
    marginTop: -40,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUp: {
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
  },
  textDown: {
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    alignSelf: 'flex-end',
    marginRight: -20,
    borderTopLeftRadius: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'white',
    fontSize: 16,
    marginBottom: 30,
  },
});
