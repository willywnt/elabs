import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image, Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddSchedule() {
  const [show, setShow] = useState(false);

  const button = {
    borderRadius: 5,
    padding: 8,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const [CourseValue, setCourseValue] = useState('');
  const [RoomValue, setRoomValue] = useState('');
  const [TimeValue, setTimeValue] = useState('');
  const [LectureValue, setLectureValue] = useState('');

  return (
    <View style={styles.scheduleContainer}>
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
                  selectedValue={CourseValue}
                  style={styles.textSelect}
                  onValueChange={(itemValue) => setCourseValue(itemValue)}
                >
                  <Picker.Item label="Select" value="" />
                  <Picker.Item label="Praktikum Dasar Pemrograman" value="Praktikum Dasar Pemrograman" />
                  <Picker.Item label="Praktikum Interaksi Manusia dan Komputer" value="Praktikum Interaksi Manusia dan Komputer" />
                  <Picker.Item label="Praktikum Rekayasa Perangkat Lunak" value="Praktikum Rekayasa Perangkat Lunak" />
                  <Picker.Item label="Praktikum Komunikasi Data dan Jaringan Komputer" value="Praktikum Komunikasi Data dan Jaringan Komputer" />
                </Picker>
              </View>
              <Text style={styles.titleSelect}>Room</Text>
              <View style={styles.selectContainer}>
                <Picker
                  selectedValue={RoomValue}
                  style={styles.textSelect}
                  onValueChange={(itemValue) => setRoomValue(itemValue)}
                >
                  <Picker.Item label="Select" value="" />
                  <Picker.Item label="FIKLAB 301" value="FIKLAB 301" />
                  <Picker.Item label="FIKLAB 302" value="FIKLAB 302" />
                  <Picker.Item label="FIKLAB 303" value="FIKLAB 303" />
                  <Picker.Item label="FIKLAB 401" value="FIKLAB 401" />
                  <Picker.Item label="FIKLAB 402" value="FIKLAB 402" />
                  <Picker.Item label="FIKLAB 403" value="FIKLAB 403" />
                </Picker>
              </View>
              <Text style={styles.titleSelect}>Time</Text>
              <View style={styles.selectContainer}>
                <Picker
                  selectedValue={TimeValue}
                  style={styles.textSelect}
                  onValueChange={(itemValue) => setTimeValue(itemValue)}
                >
                  <Picker.Item label="Select" value="" />
                  <Picker.Item label="08.00 - 09.40" value="08.00 - 09.40" />
                  <Picker.Item label="10.00 - 11.40" value="10.00 - 11.40" />
                  <Picker.Item label="13.00 - 14.40" value="13.00 - 14.40" />
                  <Picker.Item label="15.00 - 16.40" value="15.00 - 16.40" />
                </Picker>
              </View>
              <Text style={styles.titleSelect}>Lecturer</Text>
              <View style={styles.selectContainer}>
                <Picker
                  selectedValue={LectureValue}
                  style={styles.textSelect}
                  onValueChange={(itemValue) => setLectureValue(itemValue)}
                >
                  <Picker.Item label="Select" value="" />
                  <Picker.Item label="Mayanda Mega Santoni, S.Kom., M.Kom." value="Mayanda Mega Santoni, S.Kom., M.Kom." />
                  <Picker.Item label="Ria Astriratma, M.Cs." value="Ria Astriratma, M.Cs." />
                  <Picker.Item label="Noor Falih, S.Kom., M.T." value="Noor Falih, S.Kom., M.T." />
                  <Picker.Item label="Rido Zulfahmi, S.Kom., M.TI" value="Rido Zulfahmi, S.Kom., M.TI" />
                </Picker>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30 }}>
              <TouchableOpacity
                onPress={() => setShow(false)}
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
  scheduleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FD9E00',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 20,
    height: 100,
    marginTop: 20,
    marginBottom: 40,
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
