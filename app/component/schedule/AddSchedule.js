import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image, Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

export default function AddSchedule({ data }) {
  const [show, setShow] = useState(false);

  const button = {
    borderRadius: 5,
    padding: 8,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const [courseValue, setCourseValue] = useState('');
  const [roomValue, setRoomValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [lecturerValue, setLecturerValue] = useState('');

  const addScheduleHandler = () => {
    const url = 'http://10.0.2.2:5000/user/schedule';
    axios
      .post(url, {
        ...data, course: courseValue, room: roomValue, time: timeValue, lecturer: lecturerValue,
      })
      .then((response) => {
        const result = response.data;
        const { data } = result;
        setShow(false);
        setCourseValue();
        setRoomValue();
        setTimeValue();
        setLecturerValue();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.addContainer}>
      <Text style={styles.scheduleTittle}>Add Your Schedule Here</Text>
      <TouchableOpacity
        onPress={() => setShow(true)}
      >
        <Image style={styles.scheduleImage} source={require('../../../assets/icons/add-schedule-icon.png')} />
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
            backgroundColor: '#FED676', margin: 30, padding: 20, borderRadius: 20, elevation: 5,
          }}
          >
            <View>
              <Text style={styles.titleSelect}>Courses</Text>
              <View style={styles.selectContainer}>
                <Picker
                  selectedValue={courseValue}
                  style={styles.textSelect}
                  onValueChange={(item) => setCourseValue(item)}
                >
                  <Picker.Item label="Select" value="" />
                  <Picker.Item label="Praktikum Mobile Programming" value="Praktikum Mobile Programming" />
                  <Picker.Item label="Praktikum Dasar Pemrograman" value="Praktikum Dasar Pemrograman" />
                  <Picker.Item label="Praktikum Interaksi Manusia dan Komputer" value="Praktikum Interaksi Manusia dan Komputer" />
                  <Picker.Item label="Praktikum Rekayasa Perangkat Lunak" value="Praktikum Rekayasa Perangkat Lunak" />
                  <Picker.Item label="Praktikum Komunikasi Data dan Jaringan Komputer" value="Praktikum Komunikasi Data dan Jaringan Komputer" />
                  <Picker.Item label="Praktikum Data Mining dan Data Warehouse" value="Praktikum Data Mining dan Data Warehouse" />
                  <Picker.Item label="Praktikum Struktur Data dan Algoritma" value="Praktikum Struktur Data dan Algoritma" />
                  <Picker.Item label="Praktikum Pemrograman Web" value="Praktikum Pemrograman Web" />
                </Picker>
              </View>
              <Text style={styles.titleSelect}>Room</Text>
              <View style={styles.selectContainer}>
                <Picker
                  selectedValue={roomValue}
                  style={styles.textSelect}
                  onValueChange={(item) => setRoomValue(item)}
                >
                  <Picker.Item label="Select" value="" />
                  <Picker.Item label="FIK-LAB 301" value="FIK-LAB 301" />
                  <Picker.Item label="FIK-LAB 302" value="FIK-LAB 302" />
                  <Picker.Item label="FIK-LAB 303" value="FIK-LAB 303" />
                  <Picker.Item label="FIK-LAB 401" value="FIK-LAB 401" />
                  <Picker.Item label="FIK-LAB 402" value="FIK-LAB 402" />
                  <Picker.Item label="FIK-LAB 403" value="FIK-LAB 403" />
                </Picker>
              </View>
              <Text style={styles.titleSelect}>Time</Text>
              <View style={styles.selectContainer}>
                <Picker
                  selectedValue={timeValue}
                  style={styles.textSelect}
                  onValueChange={(item) => setTimeValue(item)}
                >
                  <Picker.Item label="Select" value="" />
                  <Picker.Item label="08:00 - 09:40" value="08:00 - 09:40" />
                  <Picker.Item label="10:00 - 11:40" value="10:00 - 11:40" />
                  <Picker.Item label="13:00 - 14:40" value="13:00 - 14:40" />
                  <Picker.Item label="15:00 - 16:40" value="15:00 - 16:40" />
                </Picker>
              </View>
              <Text style={styles.titleSelect}>Lecturer</Text>
              <View style={styles.selectContainer}>
                <Picker
                  selectedValue={lecturerValue}
                  style={styles.textSelect}
                  onValueChange={(item) => setLecturerValue(item)}
                >
                  <Picker.Item label="Select" value="" />
                  <Picker.Item label="Mayanda Mega Santoni, S.Kom., M.Kom." value="Mayanda Mega Santoni, S.Kom., M.Kom." />
                  <Picker.Item label="Ria Astriratma, M.Cs." value="Ria Astriratma, M.Cs." />
                  <Picker.Item label="Noor Falih, S.Kom., M.T." value="Noor Falih, S.Kom., M.T." />
                  <Picker.Item label="Rido Zulfahmi, S.Kom., M.TI" value="Rido Zulfahmi, S.Kom., M.TI" />
                  <Picker.Item label="Nurul Chamidah, S.Kom., M.Kom" value="Nurul Chamidah, S.Kom., M.Kom" />
                  <Picker.Item label="Helena Nurramdhani Irmanda, S.Pd., M.Kom" value="Helena Nurramdhani Irmanda, S.Pd., M.Kom" />
                  <Picker.Item label="Iin Ernawati, S.Kom., M.Si" value="Iin Ernawati, S.Kom., M.Si" />
                  <Picker.Item label="Desta Sandya Prasvita, S.Kom., M.Kom." value="Desta Sandya Prasvita, S.Kom., M.Kom." />
                </Picker>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30 }}>
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                  setCourseValue();
                  setRoomValue();
                  setTimeValue();
                  setLecturerValue();
                }}
                style={{
                  backgroundColor: '#ffffff',
                  marginRight: 10,
                  ...button,
                }}
              >
                <Text style={{ fontSize: 16, color: '#FD9E00' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FD9E00',
                  ...button,
                }}
                onPress={addScheduleHandler}
              >
                <Text style={{ fontSize: 16, color: '#ffffff' }}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FD9E00',
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  scheduleTittle: {
    fontSize: 16,
    color: '#ffffff',
    letterSpacing: 0.1,
  },
  scheduleImage: {
    marginTop: 10,
    width: 38,
    height: 38,
  },
  textSelect: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    marginLeft: 10,
  },
  selectContainer: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 20,

  },
  titleSelect: {
    fontSize: 18,
    fontWeight: '700',
  },
});
