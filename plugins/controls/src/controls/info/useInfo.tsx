import React from "react";
import useControls from "../../useControls";
import { ControlType, InfoLevel } from "../../ControlsPluginContext";
import getId from "../../utils/getId";

function useInfoControl(text: string, type: InfoLevel = 'info') {
  const context = useControls();
  const { registerControl } = context;
  const _id = React.useRef(getId()).current;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Info,
      label: text,
      value: { level: type },
      _id,
    });

    return () => {
      context.removeControl(_id);
    }
  }, []);

  React.useEffect(() => {
    context.updateControl(_id, { label: text });
  }, [text]);
}

export default useInfoControl;
