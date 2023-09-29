import React, { useState } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, useColorScheme, Image } from 'react-native';
import { Text, View } from '@/components/Themed';


export default function ChatScreen({}) {


  const [ chat, setChat ] = useState([
    { image: require('@/assets/images/download.jpg'), title: 'Diamond', body: 'wassup', time: '12:13', key:1 },
    { image: require('@/assets/images/download.jpg'), title: 'Quincy', body: 'How are you?', time: '12:13', key:2 },
    { image: require('@/assets/images/download.jpg'), title: 'Angee', body: 'How are you?', time: '12:13', key:3 },
    { image: require('@/assets/images/download.jpg'), title: 'Dee', body: 'How are you?', time: '12:13', key:4 },
    { image: require('@/assets/images/download.jpg'), title: 'Quincy', body: 'How are you?', time: '12:13', key:10 },
    { image: require('@/assets/images/download.jpg'), title: 'Diamond', body: 'wassup', time: '12:13', key:5 },
    { image: require('@/assets/images/download.jpg'), title: 'Quincy', body: 'How are you?', time: '12:13', key:6 },
    { image: require('@/assets/images/download.jpg'), title: 'Angee', body: 'How are you?', time: '12:13', key:7 },
    { image: require('@/assets/images/download.jpg'), title: 'Dee', body: 'How are you?', time: '12:13', key:8 },
    { image: require('@/assets/images/download.jpg'), title: 'Diamond', body: 'wassup', time: '12:13', key:9 },
  ]);
  return(
    <View style={styles.Container}>
      <FlatList
        data={chat}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.chat}>
              <View style={styles.img}>
                <View>
                  <Image source={(item.image)} style={{ height: 70, width: 70, borderRadius: 100}} />
                </View>
                <View style={{ marginTop: 10, marginLeft: 10, }}>
                  <Text style={styles.mainText} >{item.title}</Text>
                  <Text style={styles.subText} >{item.body}</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 12, marginTop: 10 }}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  chat: {
    padding: 10,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.7,
    borderBottomColor: '#cccccc',
    borderBottomLeftRadius: 100,
  },
  Container: {
    flex: 1,
  },
  img: {
    flexDirection: 'row',
  },
  mainText: {
    fontSize: 16,
    fontWeight: '600',
  },
  subText: {
    fontSize: 12,
  },
})