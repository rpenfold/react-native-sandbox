import React from 'react';
import BackdropPluginContext from '../BackdropPluginContext';
import BackdropLayer from './BackdropLayer';

function BackdropContainer() {
    const { backdrop, disabled } = React.useContext(BackdropPluginContext);

    if (disabled) {
        return null;
    }

    return (
        <BackdropLayer
            backdrop={backdrop}
        />
    )
}

export default BackdropContainer;
