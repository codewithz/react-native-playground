import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function FlexBoxComponent() {
    return (
        <View style={{
            backgroundColor: '#eee',
            flex: 1,
        }}>

            <View style={{
                backgroundColor: 'dodgerblue',
                flex: 2,
            }} />
            <View style={{
                backgroundColor: 'gold',
                flex: 1,
            }} />
            <View style={{
                backgroundColor: 'tomato',
                flex: 1,
            }} />



        </View>
    )
}

const styles = StyleSheet.create({})


