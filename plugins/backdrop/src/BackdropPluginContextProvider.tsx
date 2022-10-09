import React from 'react';
import { Image } from 'react-native';
import useSandbox from 'react-native-sandbox/src/useSandbox';
import { useTheme } from 'react-native-sandbox/src/ui/theme';
import getSandboxOptionsForPlugin from 'react-native-sandbox/src/utils/getSandboxOptionsForPlugin';
import BackdropPluginContext, { Backdrop } from './BackdropPluginContext';
import BackdropContainer from './components/BackdropContainer';
import { ColorChip } from './components/ToolbarItems';

export const BACKGROUND_OPTIONS = [null, 'white', 'black', 'gray'];

function BackdropPluginContextProvider(props) {
  const {children} = props;
  const { activeComponent, registerLayer, registerToolbarGroup } = useSandbox();
  const [backdrop, setBackdrop] = React.useState<Backdrop>(null);
  const [disabled, setDisabled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const options = getSandboxOptionsForPlugin('backdrop', activeComponent);
    const disable = options.enabled === false;

    if (activeComponent && !disable) {
      registerLayer({ id: 'backdrop', component: BackdropContainer, level: -1 });
      registerToolbarGroup({
        id: 'backdrop',
        items: [
          { id: 'backdrop-color', component: ColorChip },
        ],
      });
      setDisabled(false);
    } else if (disable) {
      setDisabled(true);
    }

  }, [activeComponent]);

  return (
    <BackdropPluginContext.Provider
      value={{
        backdrop,
        disabled,
        setBackdrop,
      }}>
      {children}
    </BackdropPluginContext.Provider>
  );
}

export default BackdropPluginContextProvider;
