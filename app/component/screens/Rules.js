import React, { useState } from 'react';
import {
  View, StyleSheet, Text, ScrollView, TouchableOpacity,
} from 'react-native';

const Rules = () => {
  const [serious, setSerious] = useState(false);
  const [moderate, setModerate] = useState(false);
  const [minor, setMinor] = useState(false);

  const dot = {
    top: 4,
    width: 14,
    height: 14,
    borderRadius: 14,
    elevation: 5,
  };
  const line = {
    width: 2,
    height: 30,
    position: 'absolute',
    top: -25,
    left: 5,
    elevation: 5,
  };
  const titleRules = {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
    marginBottom: 10,
  };
  const titleNotes = {
    width: 180,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    elevation: 10,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{
        backgroundColor: '#333456',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        padding: 20,
        borderRadius: 10,
      }}
      >
        <Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}>Noted :</Text>
        <Text style={{ ...titleNotes, backgroundColor: '#FF4343' }}>
          Serious Offense
        </Text>
        <View style={styles.notedText}>
          <View style={{ ...line, backgroundColor: '#FF4343' }} />
          <View style={{
            ...dot, backgroundColor: '#FF4343', width: 12, height: 12,
          }}
          />
          <Text style={{
            color: 'white', fontWeight: '700', fontSize: 16, marginLeft: 10, marginRight: 10,
          }}
          >
            Bila melakukan pelanggaran ini  maka tidak dapat meminjam 14 x 24 kedepannya
          </Text>
        </View>
        <Text style={{ ...titleNotes, backgroundColor: '#FFB443' }}>Moderate Offense</Text>
        <View style={styles.notedText}>
          <View style={{ ...line, backgroundColor: '#FFB443' }} />
          <View style={{
            ...dot, backgroundColor: '#FFB443', width: 12, height: 12,
          }}
          />
          <Text style={{
            color: 'white', fontWeight: '700', fontSize: 16, marginLeft: 10, marginRight: 10,
          }}
          >
            Bila melakukan pelanggaran ini 2 kali maka tidak dapat meminjam 14 x 24 kedepannya
          </Text>
        </View>
        <Text style={{ ...titleNotes, backgroundColor: '#FBFF43' }}>Minor Offense</Text>
        <View style={styles.notedText}>
          <View style={{ ...line, backgroundColor: '#FBFF43' }} />
          <View style={{
            ...dot, backgroundColor: '#FBFF43', width: 12, height: 12,
          }}
          />
          <Text style={{
            color: 'white', fontWeight: '700', fontSize: 16, marginLeft: 10, marginRight: 10,
          }}
          >
            Bila melakukan pelanggaran ini 2 kali maka tidak dapat meminjam 14 x 24 kedepannya
          </Text>
        </View>
      </View>
      <View style={styles.notedContainer}>
        <TouchableOpacity onPress={() => setSerious(!serious)}>
          <View style={{ ...titleRules, backgroundColor: '#FF4343' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Serious Offense</Text>
          </View>
        </TouchableOpacity>
        {serious ? (
          <View style={{ marginBottom: 10 }}>
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
          </View>
        ) : null}

        <TouchableOpacity onPress={() => setModerate(!moderate)}>
          <View style={{ ...titleRules, backgroundColor: '#FFB443' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Moderate Offense</Text>
          </View>
        </TouchableOpacity>
        {moderate ? (
          <View style={{ marginBottom: 10 }}>
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
          </View>
        ) : null}

        <TouchableOpacity onPress={() => setMinor(!minor)}>
          <View style={{ ...titleRules, backgroundColor: '#FBFF43' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Minor Offense</Text>
          </View>
        </TouchableOpacity>
        {minor ? (
          <View style={{ marginBottom: 10 }}>
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
        ) : null}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FF',
    flex: 1,
  },
  textContain: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
    marginBottom: 10,
    paddingRight: 20,
    fontSize: 16,
    fontWeight: '500',
  },
  notedContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
  notedText: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
});

export default Rules;
