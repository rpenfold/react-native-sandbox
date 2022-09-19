import React from 'react';
import SandboxContext from './SandboxContext';

function useSandbox() {
  const context = React.useContext(SandboxContext);

  return context;
}

export default useSandbox;
