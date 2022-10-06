import React from "react";
import useControls from "../../useControls";
import { ControlType } from "../../ControlsPluginContext";
import getId from "../../utils/getId";

function useLabelControl(label: string) {
  const context = useControls();
  const { registerControl } = context;
  const _id = React.useRef(getId()).current;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Label,
      label,
      value: "",
      _id,
    });
    
    return () => {
      context.removeControl(_id);
    }
  }, []);

  React.useEffect(() => {
    context.updateControl(_id, { label });
  }, [label]);
}

export default useLabelControl;
