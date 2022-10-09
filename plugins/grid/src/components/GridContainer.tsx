import React from 'react';
import GridPluginContext from '../GridPluginContext';
import GridLayer from './GridLayer';

function GridContainer() {
    const { enabled, size, color, type } = React.useContext(GridPluginContext);

    if (!enabled) {
        return null;
    }

    return (
        <GridLayer
            size={size}
            color={color}
            type={type}
        />
    )
}

export default GridContainer;
