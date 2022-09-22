import React, {ReactNode} from 'react';
import {ControlDefinition} from '../sandbox.types';
import SandboxContext from './SandboxContext';

function SandboxContextProvider(props) {
  const {children, components} = props;
  const [
    activeComponent,
    setActiveComponent,
  ] = React.useState<ReactNode | null>(null);
  const [controls, setControls] = React.useState<Array<ControlDefinition>>([]);
  const [docs, setDocs] = React.useState<string>();

  const registerControl = React.useCallback((control: ControlDefinition) => {
    setControls((curr) => {
      const existing = curr.find((x) => x.label === control.label);

      if (existing) {
        return curr;
      }

      return [...curr, control];
    });
  }, []);

  const removeControl = React.useCallback((control: ControlDefinition | string) => {
    const label = typeof control === 'string' ? control : control.label;
    setControls((curr) => curr.filter((x) => x.label === label));
  }, []);

  const updateControl = React.useCallback((control: Partial<ControlDefinition>) => {
    setControls((curr) => {
      const index = curr.findIndex((x) => x.label === control.label);
      curr[index] = { ...curr[index], ...control };

      return curr;
    });
  }, []);

  const loadControls = React.useCallback(
    (controlsData: Record<string, ControlDefinition>) => {
      setControls(Object.values(controlsData));
    },
    [setControls],
  );

  const registerDocs = React.useCallback((content: string) => {
    setDocs(content);
  }, []);

  const clearControls = React.useCallback(() => setControls([]), []);

  const handleSetActiveComponent = React.useCallback(
    (component: ReactNode) => {
      clearControls();
      setDocs(undefined);
      setActiveComponent(() => component);
    },
    [clearControls],
  );

  const updateControlValue = (label: string, value: any) => {
    setControls((c) => {
      const index = c.findIndex((x) => x.label === label);
      c[index] = {...c[index], value};

      return [...c];
    });
  };

  return (
    <SandboxContext.Provider
      value={{
        activeComponent,
        components,
        docs,
        setActiveComponent: handleSetActiveComponent,
        clearControls,
        loadControls,
        registerDocs,
        registerControl,
        removeControl,
        updateControl,
        updateControlValue,
        controls,
      }}>
      {children}
    </SandboxContext.Provider>
  );
}

export default SandboxContextProvider;
