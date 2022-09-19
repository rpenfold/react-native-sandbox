import React from 'react';
import useSandbox from '../../useSandbox';
import {ControlType} from '../../../sandbox.types';

function useBoolControl(label: string, initialValue?: boolean): boolean {
  const context = useSandbox();
  const {controls, registerControl} = context;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Boolean,
      label,
      value: !!initialValue,
    });

    return () => {
      context.removeControl(label);
    }
  }, [label]);

  return (
    controls.find((control) => control.label === label)?.value ?? initialValue
  );
}

export default useBoolControl;
