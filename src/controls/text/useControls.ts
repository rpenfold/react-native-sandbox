import React from 'react';
import useSandbox from '../../useSandbox';
import {ControlDefinition} from '../../sandbox.types';

// TODO: problem with this is including things that shouldn't return a value;
// as well as ensuring order.
function useControls<P = Record<string, unknown>>(
  _controls: Record<string, ControlDefinition>,
): P {
  const context = useSandbox();
  const {controls, loadControls} = context;

  React.useEffect(() => {
    loadControls(_controls);
  }, [loadControls, _controls]);

  return Object.keys(controls).reduce((prev, curr) => {
    const key = curr;
    const controlDefinition = _controls[key];
    const currentControl = controls.find(
      (c) => c.label === controlDefinition.label,
    ) as ControlDefinition;
    prev[key] =
      controls.find((c) => c.label === currentControl.label)?.value ??
      controlDefinition.value;

    return prev;
  }, {}) as P;
}

export default useControls;
