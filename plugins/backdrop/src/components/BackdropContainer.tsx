import React from 'react';
import BackdropPluginContext from '../BackdropPluginContext';
import BackdropLayer from './BackdropLayer';

function BackdropContainer() {
    const { backdrop } = React.useContext(BackdropPluginContext);

    return (
        <BackdropLayer
            backdrop={backdrop}
        />
    )
}

export default BackdropContainer;
