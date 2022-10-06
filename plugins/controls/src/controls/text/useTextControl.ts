import React from 'react';
import useControls from "../../useControls";
import { ControlType } from "../../ControlsPluginContext";
import getId from '../../utils/getId';

function useTextControl(label: string, initialValue: string): string {
  const context = useControls();
  const {controls, registerControl} = context;
  const _id = React.useRef(getId()).current;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Text,
      label,
      value: initialValue,
      _id,
    });

    return () => {
      context.removeControl(_id);
    }
  }, []);

  React.useEffect(() => {
    context.updateControl(_id, { label });
  }, [label]);

  return (
    controls.find((control) => control.label === label)?.value ?? initialValue
  );
}

export default useTextControl;
