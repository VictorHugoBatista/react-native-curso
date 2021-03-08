import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';

const styles = StyleSheet.create({
    frame: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .6)',
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#eee',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d',
    },
    bgNormal: {
        backgroundColor: '#2765f7',
    },
    bgHard: {
        backgroundColor: '#f26337',
    },
});

const LevelSelecionButton = props => (
    <TouchableOpacity style={[styles.button, {backgroundColor: props.bgColor}]}
        onPress={() => props.onSelect()}>
        <Text style={styles.buttonLabel}>{props.title}</Text>
    </TouchableOpacity>
);

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Seleciona o nível</Text>

                    <LevelSelecionButton bgColor='#49b65d' title='Fácil'
                        onSelect={() => props.onLevelSelected(0.1)} />
                    <LevelSelecionButton bgColor='#2765f7' title='Intermediário-'
                        onSelect={() => props.onLevelSelected(0.2)} />
                    <LevelSelecionButton bgColor='#f26337' title='Difícil'
                        onSelect={() => props.onLevelSelected(0.3)} />
                </View>
            </View>
        </Modal>
    );
};
