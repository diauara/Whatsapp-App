import React from 'react';
import { Text, View } from '@/components/Themed';
import { StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});


export default SettingsScreen;
