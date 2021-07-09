import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export function TextStyleComponent(props) {
    return (
        <View style={styles.container}>
        <Text>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

