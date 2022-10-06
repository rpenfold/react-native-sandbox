import React from 'react';
import useControls from "../../useControls";
import { ControlType } from "../../ControlsPluginContext";
import getId from '../../utils/getId';

function useObjectControl(
  label: string,
  initialValue: string | Record<string, any>,
): any {
  const context = useControls();
  const {controls, registerControl} = context;
  const value =
    typeof initialValue === 'string'
      ? initialValue
      : JSON.stringify(initialValue);
  const _id = React.useRef(getId()).current;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Object,
      label,
      value,
      _id,
    });

    return () => {
      context.removeControl(_id);
    }
  }, []);

  React.useEffect(() => {
    context.updateControl(_id, { label });
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
