import React from "react";
import useSandbox from "../../useSandbox";
import { ControlType } from "../../../sandbox.types";

function useLabelControl(label: string) {
  const context = useSandbox();
  const { registerControl } = context;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Label,
      label,
      value: ""
    });
  }, []);
}

export default useLabelControl;
