import React from 'react';
import ControlsPluginContext from './ControlsPluginContext';

function useControls() {
    return React.useContext(ControlsPluginContext)
} 

export default useControls;
