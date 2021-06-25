import React, { useState, useLayoutEffect, useCallback } from 'react';
import {
  View, Image, TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import axios from 'axios';
import { auth, db } from '../../../firebase';

const ChatScreen = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const { group } = route.params;

  useLayoutEffect(() => {
    const unsubscribe = db.collection(group).orderBy('createdAt', 'desc').onSnapshot((snapshot) => setMessages(
      snapshot.docs.map((doc) => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
      })),
    ));

    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    const {
      _id,
      createdAt,
      text,
      user,
    } = messages[0];
    db.collection(group).add({
      _id,
      createdAt,
      text,
      user,
    });
    const url = 'http://10.0.2.2:5000/chat/group';
    axios
      .put(url, { lastUser: user.name, lastText: text, group })
      .then((response) => {
        const result = response.data;
        const { data } = result;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderSend = (props) => (
    <Send {...props}>
      <View>
        <Image
          source={require('../../../assets/icons/send-icon.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: '#F88409',
            marginBottom: 10,
            marginRight: 10,
          }}
        />
      </View>
    </Send>
  );

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#FD9E00',
        },
        left: {
          backgroundColor: 'white',
        },
      }}
      textStyle={{
        right: {
          color: '#fff',
        },
      }}
    />
  );

  const scrollToBottomComponent = () => (
    <Image
      source={require('../../../assets/icons/goToBottom-icon.png')}
      resizeMode="contain"
      style={{
        width: 16,
        height: 16,
        tintColor: '#333',
      }}
    />
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: auth?.currentUser?.email,
          name: auth?.currentUser?.displayName,
          avatar: auth?.currentUser?.photoURL,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        renderUsernameOnMessage
        showAvatarForEveryMessage
        showUserAvatar
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </TouchableWithoutFeedback>
  );
};

export default ChatScreen;
