import React, { useState, useEffect, useCallback } from 'react';
import {
  View, ScrollView, Text, Button, StyleSheet, Image,
} from 'react-native';

import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
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
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
