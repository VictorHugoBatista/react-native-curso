import React from 'react';

import TelaCentral from '../components/TextoCentral';

export default props => {
    const route = props.route;
    const numero = route && route.params && route.params.numero || 0;
    return (
    <TelaCentral colorBg='#3b82c4'>
        Tela B (Param {numero})
    </TelaCentral>
    );
};
