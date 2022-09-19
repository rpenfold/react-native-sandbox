import React from 'react';
import useSandbox from '../../useSandbox';
import {ControlType} from '../../../sandbox.types';

function useColorControl(
  label: string,
  initialValue: string,
  colors: Array<string | {label: string; value: string; displayColor?: string}>,
): string {
  const context = useSandbox();
  const {controls, registerControl} = context;

  const resolvedColors = colors.map(color => 
    typeof color === 'string' ? { label: color, value: color } : color
  );

  React.useEffect(() => {
    registerControl({
      type: ControlType.Color,
      label,
      value: initialValue,
      options: resolvedColors,
    });

    return () => {
      context.removeControl(label);
    }
  }, [label]);

  React.useEffect(() => {
    context.updateControl({ options: resolvedColors });
  }, [colors]);

  return (
    controls.find((control) => control.label === label)?.value ?? initialValue
  );
}

export default useColorControl;
