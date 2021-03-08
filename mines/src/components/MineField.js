import React from 'react';
import { View, StyleSheet } from 'react-native';

import Field from './Field';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
    },
    row: {
        flexDirection: 'row',
    },
})

export default props => {
    const rows = props.board.map((row, keyRow) => {
        const cols = row.map((field, keyCol) => {
            return <Field {... field} key={keyCol}
                onOpen={() => props.onOpenField(keyRow, keyCol)}
                onSelect={() => props.onSelectField(keyRow, keyCol)} />;
        });
        return <View key={keyRow} style={styles.row}>{cols}</View>;
    });
    return <View style={styles.container}>{rows}</View>;
};
