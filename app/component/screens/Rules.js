import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Screen from '../Screen';

const Rules = () => {
  const dot = {
    top: 4,
    width: 14,
    height: 14,
    borderRadius: 14,
    elevation: 5,
  };
  const titleRules = {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
  };
  return (
    <Screen>
      <View style={styles.container}>
        <View style={{
          backgroundColor: '#333456',
          width: '90%',
          height: 100,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10,
          padding: 20,
          borderRadius: 10,
        }}
        >
          <Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}>Noted :</Text>
        </View>
        <View style={styles.notedContainer}>
          <View style={{ ...titleRules, backgroundColor: '#FF4343' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Serious Offense</Text>
          </View>
          <View style={styles.textContain}>
            <View style={{ ...dot, backgroundColor: '#FF4343' }} />
            <Text style={styles.text}>
              Setiap peminjam wajib menggunakan
              fasilitas bersama fik lab dengan penuh
              tanggung jawab, semua kerusakan yang
              terjadi akan ditanggung peminjam
            </Text>
          </View>
          <View style={styles.textContain}>
            <View style={{ ...dot, backgroundColor: '#FF4343' }} />
            <Text style={styles.text}>
              Dilarang membuka situs selain elearning,
              bila melanggar akan dikenakan peringatan, bila
              melakukannya lebih dari 2 kali akan dicabut izin
              meminjam
            </Text>
          </View>

          <View style={{ ...titleRules, backgroundColor: '#FFB443' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Moderate Offense</Text>
          </View>
          <View style={styles.textContain}>
            <View style={{ ...dot, backgroundColor: '#FFB443' }} />
            <Text style={styles.text}>
              Setiap peminjam wajib menggunakan
              fasilitas bersama fik lab dengan penuh
              tanggung jawab, semua kerusakan yang
              terjadi akan ditanggung peminjam
            </Text>
          </View>
          <View style={styles.textContain}>
            <View style={{ ...dot, backgroundColor: '#FFB443' }} />
            <Text style={styles.text}>
              Dilarang membuka situs selain elearning,
              bila melanggar akan dikenakan peringatan, bila
              melakukannya lebih dari 2 kali akan dicabut izin
              meminjam
            </Text>
          </View>

          <View style={{ ...titleRules, backgroundColor: '#FBFF43' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Minor Offense</Text>
          </View>
          <View style={styles.textContain}>
            <View style={{ ...dot, backgroundColor: '#FBFF43' }} />
            <Text style={styles.text}>
              Setiap peminjam wajib menggunakan
              fasilitas bersama fik lab dengan penuh
              tanggung jawab, semua kerusakan yang
              terjadi akan ditanggung peminjam
            </Text>
          </View>
          <View style={styles.textContain}>
            <View style={{ ...dot, backgroundColor: '#FBFF43' }} />
            <Text style={styles.text}>
              Dilarang membuka situs selain elearning,
              bila melanggar akan dikenakan peringatan, bila
              melakukannya lebih dari 2 kali akan dicabut izin
              meminjam
            </Text>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textContain: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  text: {
    marginLeft: 10,
    paddingRight: 20,
    fontSize: 16,
    fontWeight: '500',
  },
  notedContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
});

export default Rules;
