import React,{useState} from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList 
} from 'react-native';

import BorrowAction from './BorrowAction';

const { width } = Dimensions.get('window');

export default function ChooseComp({ comp, data }) {
  const dot = {
    width: 14, height: 14, borderRadius: 14,
  };
  const styleComp = {
    flexBasis: 40,
    marginRight: 7,
    marginBottom: 7,
    height: (width / 8) - 11,
    width: (width / 8),
    borderWidth: 1,
    borderRadius: 10,
  };
  let numColumns = 8;

  const [selectedId, setSelectedId] = useState({});
  return (
    <View style={styles.container}>
      <Text style={{ margin: 20, fontSize: 24, alignSelf: 'center' }}>Choose Computer</Text>
      <View style={styles.divider} />
      <View style={styles.wrapper}>
        <FlatList
          data={comp}   
          numColumns={numColumns}
          renderItem={({ item }) =>{
           return (
            item.kode == selectedId.kode && item.[data.sesi] != 1 ? 
            <TouchableOpacity style={{...styleComp, backgroundColor: '#F88409', borderColor: '#F88409'}} onPress={()=> {setSelectedId(!selectedId); }}/>
            : item.[data.sesi] == 0 ? 
              <TouchableOpacity style={{...styleComp, backgroundColor: 'white', borderColor: '#C4C4C4'}} onPress={()=> {setSelectedId({id: item.id, kode: item.kode}); }} />
             : item.[data.sesi] == 1 || item.[data.sesi] === 'expired' ? 
             <TouchableOpacity style={{...styleComp, backgroundColor: '#C4C4C4', borderColor: '#C4C4C4'}} disabled />
              : null
            )}}
            
        />
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator}>
          <View style={{
            ...dot, backgroundColor: '#FD9E00',
          }}
          />
          <Text style={styles.textIndicator}>Selected</Text>
        </View>
        <View style={styles.indicator}>
          <View style={{
            ...dot, backgroundColor: 'white',
          }}
          />
          <Text style={styles.textIndicator}>Available</Text>
        </View>
        <View style={styles.indicator}>
          <View style={{
            ...dot, backgroundColor: '#C4C4C4',
          }}
          />
          <Text style={styles.textIndicator}>Reserved</Text>
        </View>
      </View>
      <BorrowAction data={{...data, id: `${selectedId.id}`, compId: selectedId.kode}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    
  },
  divider: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 10,
    backgroundColor: '#F88409',
  },
  wrapper: {
    flex:1,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
  indicatorContainer: {
    backgroundColor: 'rgba(248, 132, 9, 0.3)',
    width: '110%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingRight: '10%',
    paddingLeft: '10%',
    paddingTop: 15,
    paddingBottom: 50,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIndicator: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
