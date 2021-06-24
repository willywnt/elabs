import React, { useEffect } from 'react';
import {
  View, StyleSheet, FlatList, TouchableOpacity, Image, Text, LogBox,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

const Messages = [
  {
    id: '1',
    userName: 'Willy Winata',
    userImg: require('../../../assets/foto/user-1.jpeg'),
    messageTime: '4 mins ago',
    messageText:
          'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'Anggitha Septiana',
    userImg: require('../../../assets/foto/user-2.jpeg'),
    messageTime: '2 hours ago',
    messageText:
          'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Annisa Rizky',
    userImg: require('../../../assets/foto/user-3.jpeg'),
    messageTime: '1 hours ago',
    messageText:
          'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const Chat = ({ navigation }) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <Animatable.View
      animation="fadeInUpBig"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
      }}
    >
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChatScreen')}>
            <View style={styles.UserInfo}>
              <View style={styles.UserImgWrapper}>
                <Image style={styles.UserImg} source={item.userImg} />
              </View>
              <View style={styles.TextSection}>
                <View style={styles.UserInfoText}>
                  <Text style={styles.UserName}>{item.userName}</Text>
                  <Text style={styles.PostTime}>{item.messageTime}</Text>
                </View>
                <Text style={styles.MessageText}>{item.messageText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
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
  },
  UserImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  TextSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  UserInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  UserName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  PostTime: {
    fontSize: 12,
    color: '#666',
  },
  MessageText: {
    fontSize: 14,
    color: '#333333',
  },
});
export default Chat;
