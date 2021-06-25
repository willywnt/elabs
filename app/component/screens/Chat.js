import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, FlatList, TouchableOpacity, Image, Text, LogBox, ActivityIndicator,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

const Chat = ({ navigation }) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const isFocused = useIsFocused();

  const imageGroup = require('../../../assets/icons/group-icon.png');
  const [Message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const url = 'http://10.0.2.2:5000/chat/group';
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        const { data } = result;
        setMessage(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const groupImgWrapper = {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 54,
    height: 54,
  };
  return (
    <Animatable.View
      animation="fadeInUpBig"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: '#F4F7FF',
      }}
    >
      {isLoading ? (
        <ActivityIndicator
          style={{
            flex: 2, justifyContent: 'center', alignItems: 'center',
          }}
          size="large"
          color="#F88409"
        />
      ) : (
        <FlatList
          data={Message}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChatScreen', { group: item.group })}>
              <View style={styles.UserInfo}>
                <View style={{ ...groupImgWrapper, backgroundColor: item.bg_color }}>
                  <Image style={styles.groupImg} source={imageGroup} />
                </View>
                <View style={styles.textSection}>
                  <View style={styles.groupInfo}>
                    <Text style={styles.groupName}>{item.group_name}</Text>
                    <Text style={styles.postTime}>{moment(item.updated_at).fromNow()}</Text>
                  </View>
                  <Text style={styles.messageText} numberOfLines={1}>
                    <Text style={{ fontWeight: 'bold' }}>
                      {item.last_user}
                      {' '}
                      :
                      {' '}
                    </Text>
                    {item.last_text}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  UserInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupImg: {
    width: 38,
    height: 38,
    tintColor: 'white',
  },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  groupInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  groupName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
  },
  messageText: {
    fontSize: 14,
    color: '#333333',
  },
});
export default Chat;
