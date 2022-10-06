import React from 'react';
import useControls from "../../useControls";
import { ControlType } from "../../ControlsPluginContext";
import getId from '../../utils/getId';

function useColorControl(
  label: string,
  initialValue: string,
  colors: Array<string | {label: string; value: string; displayColor?: string}>,
): string {
  const context = useControls();
  const {controls, registerControl} = context;
  const _id = React.useRef(getId()).current;

  const resolvedColors = colors.map(color => 
    typeof color === 'string' ? { label: color, value: color } : color
  );

  React.useEffect(() => {
    registerControl({
      type: ControlType.Color,
      label,
      value: initialValue,
      options: resolvedColors,
      _id,
    });

    return () => {
      context.removeControl(_id);
    }
  }, []);

  React.useEffect(() => {
    context.updateControl(_id, { label, options: resolvedColors });
  }, [label, colors]);

  return (
    controls.find((control) => control.label === label)?.value ?? initialValue
  );
}

export default useColorControl;
