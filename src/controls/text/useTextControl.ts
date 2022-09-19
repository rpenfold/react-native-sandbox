import React from 'react';
import useSandbox from '../../useSandbox';
import {ControlType} from '../../../sandbox.types';

function useTextControl(label: string, initialValue: string): string {
  const context = useSandbox();
  const {controls, registerControl} = context;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Text,
      label,
      value: initialValue,
    });

    return () => {
      context.removeControl(label);
    }
  }, [label]);

  return (
    controls.find((control) => control.label === label)?.value ?? initialValue
  );
}

export default useTextControl;
