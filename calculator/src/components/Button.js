import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

const buttonSize = Dimensions.get('window').width / 4;
const styles = StyleSheet.create({
    button: {
        fontSize: 48,
        height: buttonSize,
        width: buttonSize,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    buttonOperation: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: buttonSize * 2,
    },
    buttonTriple: {
        width: buttonSize * 3,
    },
});

export default props => {
    const stylesButton = [styles.button];
    if (props.styles) {
        props.styles.forEach(style => {
            if (styles[style]) {
                stylesButton.push(styles[style]);
            }
        });
    }
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
};
