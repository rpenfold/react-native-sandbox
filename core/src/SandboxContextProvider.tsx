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
  const [activePanel, setActivePanel] = React.useState<string | null>(null);

  const registerComponentPanel = React.useCallback((panel: PanelDefinition) => {
    console.debug(`registering ${panel.title}`)
    if (componentPanels.find(p => panel.id === p.id)) {
      return;
    }

    setComponentPanels(panels => [...panels, panel]);
  }, [componentPanels]);

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
    activePanel,
    components,
    componentPanels,
    setActiveComponent: handleSetActiveComponent,
    setActivePanel,
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
