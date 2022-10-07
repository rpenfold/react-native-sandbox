import React from 'react';
import { ControlDefinition } from './ControlsPluginContext';
import Controls from './components/Controls';
import ControlsPluginContext from './ControlsPluginContext';

function ControlsPluginContextProvider(props) {
  const {children, context} = props;
  const { activeComponent, registerComponentPanel } = context;
  const [controls, setControls] = React.useState<Array<ControlDefinition>>([]);

  const registerControl = React.useCallback((control: Omit<ControlDefinition, 'componentName'>) => {
    setControls((curr) => {
      const existing = curr.find((x) => x.label === control.label);

      if (existing) {
        return curr;
      }

      return [...curr, { componentName: activeComponent.name, ...control }];
    });
  }, [activeComponent]);

  const removeControl = React.useCallback((id) => {
    setControls((curr) => curr.filter((x) => x._id === id));
  }, []);

  const updateControl = React.useCallback((id, control: Partial<ControlDefinition>) => {
    setControls((curr) => {
      const index = curr.findIndex((x) => x._id === id);
      curr[index] = { ...curr[index], ...control };

      return curr;
    });
  }, []);

  const clearControls = React.useCallback(() => setControls([]), []);

  const updateControlValue = (id: number, value: any) => {
    setControls((c) => {
      const index = c.findIndex((x) => x._id === id);
      c[index] = {...c[index], value};

      return [...c];
    });
  };

  React.useEffect(() => {
    if (activeComponent) {
      setControls((controls) => controls.filter(c => c.componentName === activeComponent.name))
    } else {
      clearControls();
    }
  }, [activeComponent]);

  React.useEffect(() => {
    if (controls.length) {
      registerComponentPanel({ id: 'controls', title: 'Controls', component: Controls });
    }
  }, [controls]);

  return (
    <ControlsPluginContext.Provider
      value={{
        clearControls,
        registerControl,
        removeControl,
        updateControl,
        updateControlValue,
        controls,
      }}>
      {children}
    </ControlsPluginContext.Provider>
  );
}

export default ControlsPluginContextProvider;
