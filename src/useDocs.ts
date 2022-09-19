import React from 'react';
import useSandbox from './useSandbox';

function useBoolControl(content: string): void {
  const context = useSandbox();
  const {registerDocs} = context;

  React.useEffect(() => {
    registerDocs(content);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

export default useBoolControl;
