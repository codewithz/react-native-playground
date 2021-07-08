import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks';

import { DeviceOrientationComponent } from './app/components/DeviceOrientationComponent';
import {FlexBoxComponent} from './app/components/FlexBoxComponent';
export default function App() {

  return (
    
    <FlexBoxComponent></FlexBoxComponent>
  
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,
  }
})


