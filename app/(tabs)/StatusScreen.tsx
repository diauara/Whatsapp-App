import React, { useState } from 'react';
import { Text, View } from '@/components/Themed';
import { FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native';

const StatusScreen = () => {

  const [ status, setStatus ] = useState([
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 1 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 2 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 3 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 4 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 5 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 6 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 7 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 8 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 9 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 10 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 11 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 12 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 13 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 14 },
    { image: require('@/assets/images/download.jpg'), name: 'Diamond', time: '12h', key: 15 },
  ]);

  return(
    <ScrollView style={styles.Container}>

      <TouchableOpacity>
          <View style={styles.myStatus}>
            <Image 
              source={require('@/assets/images/download.jpg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 100,
              }}
            />
            <View style={{paddingLeft: 10}} >
              <Text style={{ fontSize: 16, fontWeight: '700' }} >My Status</Text>
              <Text>12h ago</Text>
            </View>
          </View>
      </TouchableOpacity>

      <FlatList
        data={status}
        style={{ borderRadius: 10 }}
        scrollEnabled={false}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.list} >
              <View>
                <Image 
                  source={item.image}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 100,
                  }}
                  />
              </View>
              <View style={{paddingLeft: 10}} >
                <Text style={{ fontSize: 16, fontWeight: '700' }} >{item.name}</Text>
                <Text>{item.time} ago</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    backgroundColor: '#cccccc',
  },
  list: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  myStatus: {
    padding: 10, 
    borderRadius: 10, 
    marginBottom: 10, 
    flexDirection: 'row',
    alignItems: 'center'
  }
});


export default StatusScreen;
