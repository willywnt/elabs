import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

import ChooseComp from './ChooseComp';

const btnActive = {
  backgroundColor: '#F88409',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5,
};
const btnNotAvailable = {
  backgroundColor: '#C4C4C4',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5,
};
const btnAvailable = {
  backgroundColor: '#FED676',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5,
};

export default function ButtonTimes({ comp, data }) {
  const hours = new Date().getHours();
  const min = new Date().getMinutes();
  const times = hours * 60 + min;

  let defaultActive = 0;
  let defultTime = '';
  let defaultSesi = 'sesi_1';

  if (times >= 390 && times <= 579) {
    defaultActive = 0;
    defaultSesi = 'sesi_1';
    defultTime = '08:00 - 09:40';
  } else if (times >= 600 && times <= 699) {
    defaultActive = 1;
    defaultSesi = 'sesi_2';
    defultTime = '10:00 - 11:40';
  } else if (times >= 700 && times <= 879) {
    defaultActive = 2;
    defaultSesi = 'sesi_3';
    defultTime = '13:00 - 14:40';
  } else if (times >= 880 && times <= 999) {
    defaultActive = 3;
    defaultSesi = 'sesi_4';
    defultTime = '15:00 - 16:40';
  }

  const [active, setActive] = useState(defaultActive);
  const [jam, setJam] = useState(defultTime);
  const [sesi, setSesi] = useState(defaultSesi);

  return (
    <View style={styles.buttonContainer}>
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity
          style={active === 0 ? { ...btnActive, marginRight: 15 }
            : { ...btnAvailable, marginRight: 15 }}
          onPress={() => {
            setActive(0);
            setJam('08:00 - 09:40');
            setSesi('sesi_1');
          }}
        >
          <Text>08:00 - 09:40</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={active === 1 ? btnActive
            : btnAvailable}
          onPress={() => {
            setActive(1);
            setJam('10:00 - 11:40');
            setSesi('sesi_2');
          }}
        >
          <Text>10:00 - 11:40</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity
          style={active === 2 ? { ...btnActive, marginRight: 15 }
            : { ...btnAvailable, marginRight: 15 }}
          onPress={() => {
            setActive(2);
            setJam('13:00 - 14:40');
            setSesi('sesi_3');
          }}
        >
          <Text>13:00 - 14:40</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={active === 3 ? btnActive : btnAvailable}
          onPress={() => {
            setActive(3);
            setJam('15:00 - 16:40');
            setSesi('sesi_4');
          }}
        >
          <Text>15:00 - 16:40</Text>
        </TouchableOpacity>
      </View>
      <ChooseComp
        comp={comp}
        data={{
          ruangan: data.lab, komputer: data.komputer, jam, sesi,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
});
