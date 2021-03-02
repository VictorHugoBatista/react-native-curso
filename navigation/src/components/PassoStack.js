import React from 'react';
import { Button, View } from 'react-native';

export default props => (
    <View style={{flex: 1}}>
        <View>
            { props.goForward ? <Button title='Avançar' onPress={() => props.navigation.navigate(props.goForward)} /> : false }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
);
