import React, {ReactNode} from 'react';
import { PanelDefinition, SandboxContextData } from '../sandbox.types';
import SandboxContext from './SandboxContext';

function SandboxContextProvider(props) {
  const {children, components, plugins} = props;
  const [
    activeComponent,
    setActiveComponent,
  ] = React.useState<ReactNode | null>(null);
  const [componentPanels, setComponentPanels] = React.useState<any>([]);

  const registerComponentPanel = React.useCallback((panel: PanelDefinition) => {
    if (componentPanels.find(p => panel.id === p)) {
      return;
    }

    setComponentPanels(panels => [...panels, panel]);
  }, []);

  const clearPanels = React.useCallback(() => setComponentPanels([]), []);

  const handleSetActiveComponent = React.useCallback(
    (component: ReactNode) => {
      clearPanels();
      setActiveComponent(() => component);
    },
    [],
  );

  const context: SandboxContextData = {
    activeComponent,
    components,
    componentPanels,
    setActiveComponent: handleSetActiveComponent,
    registerComponentPanel,
  };

  return (
    <SandboxContext.Provider value={context}>
      {plugins
        .filter(p => p.provider)
        .map(p => p.provider)
        .reduceRight((child, C) => (<C context={context}>{child}</C>), children)
      }
    </SandboxContext.Provider>
  );
}

export default SandboxContextProvider;
