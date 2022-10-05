import React from 'react';
import {SandboxContextData} from '../sandbox.types';

const SandboxContext = React.createContext<SandboxContextData>({
  activeComponent: null,
  components: [],
  setActiveComponent: () => console.warn('not ready'),
  clearControls: () => console.warn('not ready'),
  registerControl: () => console.warn('not ready'),
  removeControl: () => console.warn('not ready'),
  updateControl: () => console.warn('not ready'),
  updateControlValue: () => console.warn('not ready'),
  controls: [],
});

export default SandboxContext;
