import React from 'react';
import {SandboxContextData} from '../sandbox.types';

const SandboxContext = React.createContext<SandboxContextData>({
  activeComponent: null,
  components: [],
  componentPanels: [],
  registerComponentPanel: () => console.warn('sandbox not ready'),
  setActiveComponent: () => console.warn('sandbox not ready'),
});

export default SandboxContext;
