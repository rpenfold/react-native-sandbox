import React from 'react';
import { Image } from 'react-native';
import useSandbox from 'react-native-sandbox/src/useSandbox';
import { useTheme } from 'react-native-sandbox/src/ui/theme';
import BackdropPluginContext, { Backdrop } from './BackdropPluginContext';
import BackdropContainer from './components/BackdropContainer';
import { ColorChip } from './components/ToolbarItems';

export const BACKGROUND_OPTIONS = [null, 'white', 'black', 'gray'];

function BackdropPluginContextProvider(props) {
  const {children} = props;
  const { activeComponent, registerLayer, registerToolbarGroup } = useSandbox();
  const [backdrop, setBackdrop] = React.useState<Backdrop>(null);

  React.useEffect(() => {
    if (activeComponent) {
      registerLayer({ id: 'backdrop', component: BackdropContainer, level: -1 });
      registerToolbarGroup({
        id: 'backdrop',
        items: [
          { id: 'backdrop-color', component: ColorChip },
        ],
      })
    }
  }, [activeComponent]);

  return (
    <BackdropPluginContext.Provider
      value={{
        backdrop,
        setBackdrop
      }}>
      {children}
    </BackdropPluginContext.Provider>
  );
}

export default BackdropPluginContextProvider;
