import React from "react";
import useSandbox from "../../useSandbox";
import { ControlType, InfoLevel } from "../../../sandbox.types";

function useInfoControl(text: string, type: InfoLevel = 'info') {
  const context = useSandbox();
  const { registerControl } = context;

  React.useEffect(() => {
    registerControl({
      type: ControlType.Info,
      label: text,
      value: { level: type }
    });
  }, []);
}

export default useInfoControl;
