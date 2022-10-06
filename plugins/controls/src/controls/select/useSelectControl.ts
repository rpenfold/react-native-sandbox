import React from 'react';
import useControls from "../../useControls";
import { ControlType } from "../../ControlsPluginContext";
import getId from '../../utils/getId';

function useSelectControl<T = string | number>(
  label: string,
  initialValue: T,
  options: Array<T | {label: string; value: T}>,
): T {
  const context = useControls();
  const {controls, registerControl} = context;
  const _id = React.useRef(getId()).current;
  
  const resolvedOptions = options.map(option => 
    ['string', 'number'].includes(typeof option) ? { label: option, value: option } : option
  ) as Array<{label: string; value: string | number}>;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Select,
      label,
      value: initialValue,
      options: resolvedOptions,
      _id,
    });

    return () => {
      context.removeControl(_id);
    }
  }, []);

  React.useEffect(() => {
    context.updateControl(_id, { options: resolvedOptions });
  }, [label, options]);

  return (
    controls.find((control) => control.label === label)?.value ?? initialValue
  );
}

export default useSelectControl;
