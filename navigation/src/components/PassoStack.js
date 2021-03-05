import React from 'react';
import { Button, View } from 'react-native';

export default props => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
                { props.goBack &&
                    <Button title='Voltar' style={{flex: 1}} onPress={() => props.navigation.goBack()} /> }
                { !! props.goForward &&
                    <View><Button title='Avançar' style={{flex: 1}} onPress={() => props.navigation.push(props.goForward, props.params)} />
                    <Button title='Avançar2' style={{flex: 1}} onPress={() => props.navigation.navigate(props.goForward, props.params)} /></View> }
            </View>
            <View style={{flex: 1}}>
                {props.children}
            </View>
        </View>
    );
};
