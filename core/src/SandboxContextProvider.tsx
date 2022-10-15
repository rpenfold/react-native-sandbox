import React, {ReactNode} from 'react';
import { LayerDefinition, PanelDefinition, SandboxContextData, ToolbarGroupDefinition } from './sandbox.types';
import SandboxContext from './SandboxContext';

function SandboxContextProvider(props) {
  const {children, components, plugins} = props;
  const [
    activeComponent,
    setActiveComponent,
  ] = React.useState<ReactNode | null>(null);
  const [componentPanels, setComponentPanels] = React.useState<any>([]);
  const [activePanel, setActivePanel] = React.useState<string | null>(null);
  const [layers, setLayers] = React.useState<Array<LayerDefinition>>([]);
  const [toolbarGroups, setToolbarGroups] = React.useState<Array<ToolbarGroupDefinition>>([]);

  const registerComponentPanel = React.useCallback((panel: PanelDefinition) => {
    setComponentPanels(panels => panels.find(p => panel.id === p.id) ? panels : [...panels, panel]);
  }, [componentPanels]);

  const clearPanels = React.useCallback(() => setComponentPanels([]), []);

  const registerLayer = React.useCallback((layer: LayerDefinition) => {
    setLayers((_layers) => _layers.find(l => l.id === layer.id) ? _layers : [..._layers, layer]);
  }, []);

  const registerToolbarGroup = React.useCallback((group: ToolbarGroupDefinition) => {
    setToolbarGroups((groups) => groups.find(g => g.id === group.id) ? groups : [...groups, group]);
  }, []);

  const clearToolbarGroups = React.useCallback(() => setToolbarGroups([]), []);

  const handleSetActiveComponent = React.useCallback(
    (component: ReactNode) => {
      clearPanels();
      clearToolbarGroups();
      setActiveComponent(() => component);
    },
    [],
  );

  const context: SandboxContextData = {
    activeComponent,
    activePanel,
    components,
    componentPanels,
    layers,
    toolbarGroups,
    setActiveComponent: handleSetActiveComponent,
    setActivePanel,
    registerComponentPanel,
    registerLayer,
    registerToolbarGroup,
  };

  return (
    <SandboxContext.Provider value={context}>
      {plugins
        .filter(p => p.provider)
        .reduceRight((child, { provider: C, options }) => (<C context={context} options={options}>{child}</C>), children)
      }
    </SandboxContext.Provider>
  );
}

export default SandboxContextProvider;
