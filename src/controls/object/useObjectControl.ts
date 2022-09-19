import React from 'react';
import useSandbox from '../../useSandbox';
import {ControlType} from '../../../sandbox.types';

function useObjectControl(
  label: string,
  initialValue: string | Record<string, any>,
): any {
  const context = useSandbox();
  const {controls, registerControl} = context;
  const value =
    typeof initialValue === 'string'
      ? initialValue
      : JSON.stringify(initialValue);

  React.useEffect(() => {
    registerControl({
      type: ControlType.Object,
      label,
      value,
    });

    return () => {
      context.removeControl(label);
    }
  }, [label]);

  const str =
    controls.find((control) => control.label === label)?.value ?? value;

  try {
    return JSON.parse(str);
  } catch (err) {
    console.warn(
      `Malformed input for control "${label}". Please ensure that it is valid JSON.`,
    );

    return {};
  }
}

export default useObjectControl;
