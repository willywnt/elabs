import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet, ScrollView, ActivityIndicator, Dimensions, LogBox,
} from 'react-native';

import axios from 'axios';

import ButtonTimes from '../comp/ButtonTimes';

const { height } = Dimensions.get('window');

const Borrow1 = ({ route }) => {
  const { komputer, lab } = route.params;
  const [comp, setComp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const savedCallback = useRef();

  function callback() {
    const url = 'http://10.0.2.2:5000/computer';
    axios
      .post(url, { komputer, hari: 'Senin' })
      .then((response) => {
        const result = response.data;
        const { data } = result;
        setComp(data);
        setIsLoading(false);
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
    const id = setInterval(refresh, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          style={{
            flex: 1, justifyContent: 'center', alignItems: 'center', height,
          }}
          size="large"
          color="#F88409"
        />
      )
        : <ButtonTimes comp={comp} data={{ lab, komputer }} />}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FF',
    flex: 1,
  },
});

export default Borrow1;
