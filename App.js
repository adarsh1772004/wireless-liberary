import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Transation from './Screen/Transation'
export default class  App extends React.Component {
  render()
  {

  
  return (
    <View style={styles.container}>
     <Transation></Transation>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
