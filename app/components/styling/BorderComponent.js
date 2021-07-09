import React from 'react';
import { View, StyleSheet } from 'react-native';

export function BorderComponent(props) {
    return (

        <View style={styles.container}>
            <View style={styles.border}>

                <View style={{
                    backgroundColor: 'gold',
                    width: 50,
                    height: 50,
                }}
                >
                </View>
            </View>
            <View style={{
                backgroundColor: 'tomato',
                width: 100,
                height: 100,
                margin: 20,
            }}
            >
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    border: {
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'royalblue',
        borderRadius: 10,
        shadowColor: 'grey',
        elevation: 25,
        padding: 20,
        paddingHorizontal: 10


    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})