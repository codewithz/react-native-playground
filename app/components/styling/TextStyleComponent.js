import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export function TextStyleComponent(props) {
    return (
        <View style={styles.container}>
        <Text style={styles.textContent}>
            I love React Native!!
            My first React native app!!
            Here is some more text for you guys
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
    },
    textContent:{
        fontFamily:'Roboto',
        fontSize:30,
        fontStyle:'italic',
        fontWeight:'600',
        color:'tomato',
        textTransform:'capitalize',
        textAlign:'center',
        lineHeight:40
    }
})

