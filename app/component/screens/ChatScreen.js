import React, { useState, useLayoutEffect, useCallback } from 'react';
import {
  View, StyleSheet, Image,
} from 'react-native';

import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import { auth, db } from '../../../firebase';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    const unsubscribe = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot((snapshot) => setMessages(
      snapshot.docs.map((doc) => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
      })),
    ));
    return unsubscribe;
  }, []);
  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 3,
  //       text: 'Ini testing',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 3,
  //         name: 'Winata',
  //         avatar: 'https://elabsupnvj.my.id/laravel/storage/app/public/images/1-1624095576.png',
  //       },
  //     },
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //     {
  //       _id: 2,
  //       text: 'Hello world',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 1,
  //         name: 'Willy',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },

  //   ]);
  // }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    const {
      _id,
      createdAt,
      text,
      user,
    } = messages[0];
    db.collection('chats').add({
      _id,
      createdAt,
      text,
      user,
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
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;
