import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import Flag from './Flag';
import Mine from './Mine';
import params from '../params';

const styles = StyleSheet.create({
    field: {
        borderWidth: params.borderSize,
        height: params.blockSize,
        width: params.blockSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        alignItems: 'center',
        backgroundColor: '#999',
        borderColor: '#777',
        justifyContent: 'center',
    },
    label: {
        fontSize: params.fontSize,
        fontWeight: 'bold',
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    flagged: {

    },
})

export default ({ mined, opened, nearMines, exploded, flagged, onOpen, onSelect }) => {
    const styleField = [styles.field];
    if (opened) {
        styleField.push(styles.opened);
    }
    if (exploded) {
        styleField.push(styles.exploded);
    }
    if (flagged) {
        styleField.push(styles.flagged, styles.regular);
    }
    if (styleField.length === 1) {
        styleField.push(styles.regular);
    }

    let color = null;
    if (nearMines) {
        switch (nearMines) {
            case 1:
                color = '#2a28d7';
                break;
            case 2:
                color = '#2b520f';
                break;
            case 3:
            case 4:
            case 5:
                color = '#f9060a';
                break;
            case 6:
                color = '#f221a9';
        }
    }

    return (
        <TouchableWithoutFeedback onPress={onOpen}
            onLongPress={onSelect}>
            <View style={styleField}>
                {! mined && opened && nearMines ?
                    <Text style={[styles.label, {color}]}>{nearMines}</Text> : null}
                {mined && opened ? <Mine /> : null}
                {flagged && ! opened ? <Flag /> : null}
            </View>
        </TouchableWithoutFeedback>
    );
};
