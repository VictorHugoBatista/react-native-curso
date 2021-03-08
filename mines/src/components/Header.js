import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Flag from './Flag';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#eee',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 5,
    },
    button: {
        backgroundColor: '#77777f',
        padding: 5,
    },
    buttonLabel: {
        color: '#eee',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity style={styles.flagButton} onPress={props.onFlagPress}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo jogo</Text>
            </TouchableOpacity>
        </View>
    );
};
