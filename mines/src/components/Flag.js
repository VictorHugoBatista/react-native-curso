import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    flagpole: {
        backgroundColor: '#222',
        height: 14,
        marginLeft: 9,
        position: 'absolute',
        width: 2,
    },
    flag: {
        backgroundColor: '#f22',
        height: 5,
        marginLeft: 3,
        position: 'absolute',
        width: 6,
    },
    base1: {
        backgroundColor: '#222',
        height: 2,
        marginLeft: 7,
        marginTop: 10,
        position: 'absolute',
        width: 6,
    },
    base2: {
        backgroundColor: '#222',
        height: 2,
        marginLeft: 5,
        marginTop: 12,
        position: 'absolute',
        width: 10,
    },
})

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagpole} />
            <View style={styles.flag} />
            <View style={styles.base1} />
            <View style={styles.base2} />
        </View>
    );
};
