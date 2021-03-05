import React from 'react';
import { Button, View } from 'react-native';

import TelaCentral from '../components/TextoCentral';

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button title="Abrir"
                onPress={() => props.navigation.openDrawer()} />
        </View>
        <View style={{ flex: 1 }}>
            <TelaCentral colorBg='#33fa72' colorFont='#000'>
                Tela D
            </TelaCentral>
        </View>
    </View>
);
