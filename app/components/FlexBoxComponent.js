import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function FlexBoxComponent() {
    return (
        <View style={{
            backgroundColor: '#eee',
            flex: 1,
            flexDirection:"row",
            justifyContent:'center',
            alignItems:'center'
        }}>

            <View style={{
                backgroundColor: 'dodgerblue',
                width: 100,
                height: 300,
            }} />
            <View style={{
                backgroundColor: 'gold',
                width: 100,
                height: 200,
            }} />
            <View style={{
                backgroundColor: 'tomato',
                width: 100,
                height: 100,
            }} />



        </View>
    )
}

const styles = StyleSheet.create({})


