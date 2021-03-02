import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
    },
});

export default props => (
    <View style={[styles.container, {backgroundColor: props.colorBg || '#000'}]}>
        <Text style={[styles.text, {color: props.colorFont || '#fff'}]}>
            {props.children}
        </Text>
    </View>
);
