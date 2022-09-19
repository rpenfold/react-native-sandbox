import React from "react";
import useSandbox from "../../useSandbox";
import { ControlType } from "../../../sandbox.types";

function useDivider() {
  const context = useSandbox();
  const { registerControl } = context;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Divider,
      label: "",
      value: ""
    });

    return () => {
      context.removeControl();
    }
  }, []);
}

export default useDivider;
