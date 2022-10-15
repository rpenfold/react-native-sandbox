import React from 'react';
import { useSandbox } from 'react-native-sandbox/internal';
import { useTheme } from 'react-native-sandbox/internal';
import { getSandboxOptionsForPlugin } from 'react-native-sandbox/internal';
import GridPluginContext, { GridType } from './GridPluginContext';
import GridContainer from './components/GridContainer';
import { SizeChip, TypeChip } from './components/ToolbarItems';

export const GRID_SIZE_OPTIONS = [10, 20, 50];
export const GRID_TYPE: Array<GridType> = ['line', 'dot'];

function GridPluginContextProvider(props) {
  const {children, options} = props;
  const { activeComponent, registerLayer, registerToolbarGroup } = useSandbox();
  const [enabled, setEnabled] = React.useState<boolean>(false);
  const [size, setSize] = React.useState<number>(20);
  const [color, setColor] = React.useState<string>(options?.gridColor ?? 'rgba(0, 0, 0, 0.15)');
  const [type, setType] = React.useState<GridType>(options?.defaultType ?? 'line');
  const [disabled, setDisabled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const options = getSandboxOptionsForPlugin('grid', activeComponent);
    const disable = options.enabled === false;

    if (activeComponent && !disable) {
      registerLayer({ id: 'grid', component: GridContainer });
      registerToolbarGroup({
        id: 'grid',
        items: [
          { id: 'grid-size', component: SizeChip },
          { id: 'grid-type', component: TypeChip },
        ],
      });
      setDisabled(false);
    } else if (disable) {
      setDisabled(true);
    }
  }, [activeComponent]);

  return (
    <GridPluginContext.Provider
      value={{
        enabled,
        disabled,
        size,
        color,
        type,
        setEnabled,
        setSize,
        setColor,
        setType,
      }}>
      {children}
    </GridPluginContext.Provider>
  );
}

export default GridPluginContextProvider;
