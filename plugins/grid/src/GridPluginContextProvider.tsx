import React from 'react';
import useSandbox from 'react-native-sandbox/src/useSandbox';
import { useTheme } from 'react-native-sandbox/src/ui/theme';
import GridPluginContext, { GridType } from './GridPluginContext';
import GridContainer from './components/GridContainer';
import { SizeChip, TypeChip } from './components/ToolbarItems';

export const GRID_SIZE_OPTIONS = [10, 20, 50];
export const GRID_TYPE: Array<GridType> = ['line', 'dot'];

function GridPluginContextProvider(props) {
  const {children} = props;
  const { activeComponent, registerLayer, registerToolbarGroup } = useSandbox();
  const [enabled, setEnabled] = React.useState<boolean>(false);
  const [size, setSize] = React.useState<number>(20);
  const [color, setColor] = React.useState<string>('rgba(0, 0, 0, 0.15)');
  const [type, setType] = React.useState<GridType>('line');

  React.useEffect(() => {
    if (activeComponent) {
      registerLayer({ id: 'grid', component: GridContainer });
      registerToolbarGroup({
        id: 'grid',
        items: [
          { id: 'grid-size', component: SizeChip },
          { id: 'grid-type', component: TypeChip },
        ],
      })
    }
  }, [activeComponent]);

  return (
    <GridPluginContext.Provider
      value={{
        enabled,
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
