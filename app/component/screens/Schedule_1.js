import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Text, FlatList, Image, LogBox,
} from 'react-native';
import axios from 'axios';

const Schedule1 = ({ route }) => {
  const [jadwalLab, setJadwalLab] = useState([]);
  const { jadwal } = route.params;

  useEffect(() => {
    const url = 'http://10.0.2.2:5000/schedule';
    axios
      .post(url, { jadwal })
      .then((response) => {
        const result = response.data;
        const { data } = result;
        setJadwalLab(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const hours = new Date().getHours();
  const min = new Date().getMinutes();
  const times = hours * 60 + min;

  let defultTime = '';
  if (times >= 390 && times <= 579) {
    defultTime = '08.00 - 09.40';
  } else if (times >= 600 && times <= 699) {
    defultTime = '10.00 - 11.40';
  } else if (times >= 700 && times <= 879) {
    defultTime = '13.00 - 14.40';
  } else if (times >= 880 && times <= 999) {
    defultTime = '15.00 - 16.40';
  }

  const colorAlready = '#C4C4C4';
  const colorWaiting = '#F88409';
  const colorOngoing = '#1EAE4F';

  const borderLeft = {
    borderLeftWidth: 1,
    height: 110,
    paddingLeft: 20,
    marginLeft: 20,
    paddingTop: 30,

  };
  const dotLeft = {
    width: 12,
    height: 12,
    borderRadius: 12,
    position: 'absolute',
    left: -6,
    top: '43%',
  };
  const timeIcon = {
    width: 22,
    height: 22,
  };
  const statusText = {
    fontSize: 14,
    fontWeight: 'bold',
  };
  const status = {
    position: 'absolute',
    right: 40,
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
  const matkul = {
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: '35%',
  };
  const dosen = {
    fontSize: 14,
    marginTop: 2,
    paddingRight: '35%',
  };

  const Item = ({
    item, color, stat, textColor,
  }) => (
    <View style={{ ...borderLeft, borderLeftColor: color }}>
      <View style={{ ...dotLeft, backgroundColor: color }} />
      <View style={styles.timeContainer}>
        <Image style={{ ...timeIcon, tintColor: color }} source={require('../../../assets/icons/time-icon.png')} />
        <Text style={{ ...timeText, color }}>{item.waktu}</Text>
      </View>
      <Text style={{ ...matkul, color }}>{item.matkul}</Text>
      <Text style={{ ...dosen, color }}>{item.dosen}</Text>
      <View style={{ ...status, backgroundColor: color }}>
        <Text style={{ ...statusText, color: textColor }}>
          {stat}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.schedule}>
        <FlatList
          data={jadwalLab}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            let color = '';
            let stat = '';
            let textColor = '';
            let start = 0;
            let end = 0;
            if (index === 0) {
              start = 390;
              end = 579;
            } else if (index === 1) {
              start = 600;
              end = 699;
            } else if (index === 2) {
              start = 700;
              end = 879;
            } else if (index === 3) {
              start = 880;
              end = 999;
            }

            if (start < times) {
              color = colorAlready;
              stat = 'already';
              textColor = '#738CA0';
            }
            if (end > times) {
              color = colorWaiting;
              stat = 'waiting';
              textColor = 'white';
            }
            if (item.waktu === defultTime) {
              color = colorOngoing;
              stat = 'ongoing';
              textColor = 'white';
            }

            return (
              item.matkul !== 'Tidak ada jadwal' ? (
                <Item
                  item={item}
                  color={color}
                  stat={stat}
                  textColor={textColor}
                />
              ) : null
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FF',
    flex: 1,
  },
  schedule: {
    width: '100%',
  },
  timeContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
});

export default Schedule1;
