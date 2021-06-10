import React from 'react';
import {
  View, Text, StyleSheet, FlatList, Image, TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CardMenu() {
  const navigation = useNavigation();
  const menus = [{
    id: '1',
    name: 'Borrow',
    icon: require('../../../assets/icons/borrow.png'),
    color: '#FD9E00',
  },
  {
    id: '2',
    name: 'Schedule',
    icon: require('../../../assets/icons/schedule.png'),
    color: '#5191CE',
  },
  {
    id: '3',
    name: 'Rules',
    icon: require('../../../assets/icons/rules.png'),
    color: '#F57E71',
  },
  {
    id: '4',
    name: 'Status',
    icon: require('../../../assets/icons/status.png'),
    color: '#A6ED9A',
  }];
  return (
    <FlatList
      data={menus}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(`${item.name}`)}
        >
          <View style={styles.container} key={item.id}>
            <View
              style={{
                backgroundColor: item.color,
                width: 80,
                height: 80,
                borderRadius: 9,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
                marginRight: -10,
                marginTop: -10,
                elevation: 1,
              }}
            >
              <Image style={styles.image} source={item.icon} />
            </View>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 113,
    height: 137,
    borderRadius: 11,
    backgroundColor: 'white',
    marginRight: 25,
    marginBottom: 5,
    marginTop: 20,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    color: '#292685',
  },

});
