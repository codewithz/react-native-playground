import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';

export default function App() {

  console.log(Dimensions.get('screen'))

  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor:'dodgerblue',
        width:'50%',
        height:70
      }}
      >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:50,
  },
});
