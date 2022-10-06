import React from "react";
import useControls from "../../useControls";
import { ControlType } from "../../ControlsPluginContext";
import getId from "../../utils/getId";

function useDivider() {
  const context = useControls();
  const { registerControl } = context;
  const _id = React.useRef(getId()).current;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Divider,
      label: "",
      value: "",
      _id,
    });

    return () => {
      context.removeControl(_id);
    }
  }, []);
}

export default useDivider;
