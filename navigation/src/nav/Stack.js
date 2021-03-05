import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PassoStack from '../components/PassoStack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen name="TelaA">
            {props => (
                <PassoStack { ...props } goForward='TelaB' params={{numero: 3}}>
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {props => (
                <PassoStack { ...props } goBack goForward='TelaC'>
                    <TelaB { ...props } />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <PassoStack { ...props } goBack goForward='TelaB' params={{numero: 54}}>
                    <TelaC />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
);
