import React, {
  useState, useEffect, useRef, useLayoutEffect,
} from 'react';
import {
  StyleSheet, ScrollView, ActivityIndicator, Dimensions, TouchableHighlight, Image, Alert,
} from 'react-native';

import axios from 'axios';

import ButtonTimes from '../comp/ButtonTimes';

const { height } = Dimensions.get('window');

const Borrow1 = ({ navigation, route }) => {
  const { komputer, lab, group } = route.params;
  const [comp, setComp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const savedCallback = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableHighlight
          onPress={() => {
            Alert.alert('Group Chat', `Click OKE to join the group chat ${lab}...`, [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                cancelable: true,
              },
              { text: 'OKE', onPress: () => navigation.navigate('ChatScreen', { group }) },
            ]);
          }}
          activeOpacity={0.8}
          underlayColor="#B9B9B9"
          style={{
            width: 40, height: 40, paddingLeft: 0, borderRadius: 40 / 2, justifyContent: 'center', marginRight: 10,
          }}
        >
          <Image
            source={require('../../../assets/icons/chat-icon.png')}
            resizeMode="contain"
            style={{
              width: 18,
              height: 18,
              alignSelf: 'center',
              tintColor: 'black',
            }}
          />
        </TouchableHighlight>
      ),
    });
  }, [navigation]);

  function callback() {
    const url = 'http://10.0.2.2:5000/computer';
    axios
      .post(url, { komputer })
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
    const id = setInterval(refresh, 2500);
    return () => clearInterval(id);
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
