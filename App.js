import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks';

import { DeviceOrientationComponent } from './app/components/DeviceOrientationComponent';
import {FlexBoxComponent} from './app/components/FlexBoxComponent';
import { BorderComponent } from './app/components/styling/BorderComponent';
import { TextStyleComponent } from './app/components/styling/TextStyleComponent';
export default function App() {

  return (
    
   <TextStyleComponent></TextStyleComponent>
    
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,
  }
})


