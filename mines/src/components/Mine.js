import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    coreMine: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        height: 14,
        justifyContent: 'center',
        width: 14,
    },
    line: {
        backgroundColor: 'black',
        borderRadius: 2,
        height: 3,
        position: 'absolute',
        width: 20,
    },
    rotate45: {
        transform: [{rotate: '45deg'}],
    },
    rotate90: {
        transform: [{rotate: '90deg'}],
    },
    rotate135: {
        transform: [{rotate: '135deg'}],
    },
});

export default () => (
    <View style={styles.container}>
        <View style={styles.coreMine} />
        <View style={styles.line} />
        <View style={[styles.line, styles.rotate45]} />
        <View style={[styles.line, styles.rotate90]} />
        <View style={[styles.line, styles.rotate135]} />
    </View>
);
