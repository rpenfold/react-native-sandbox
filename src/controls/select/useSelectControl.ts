import React from 'react';
import useSandbox from '../../useSandbox';
import {ControlType} from '../../../sandbox.types';

function useSelectControl<T = string | number>(
  label: string,
  initialValue: T,
  options: Array<T | {label: string; value: T}>,
): T {
  const context = useSandbox();
  const {controls, registerControl} = context;
  
  const resolvedOptions = options.map(option => 
    ['string', 'number'].includes(typeof option) ? { label: option, value: option } : option
  ) as Array<{label: string; value: string | number}>;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Select,
      label,
      value: initialValue,
      options: resolvedOptions,
    });

    return () => {
      context.removeControl(label);
    }
  }, [label]);

  React.useEffect(() => {
    context.updateControl({ options: resolvedOptions });
  }, [options]);

  return (
    controls.find((control) => control.label === label)?.value ?? initialValue
  );
}

export default useSelectControl;
