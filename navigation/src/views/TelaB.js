import React from 'react';

import TelaCentral from '../components/TextoCentral';

export default props => {
    return (
    <TelaCentral colorBg='#3b82c4'>
        Tela B (Param {props.route.params.numero})
    </TelaCentral>
    );
};
