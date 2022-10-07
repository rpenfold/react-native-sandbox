import React from 'react';
import SandboxContextProvider from '../SandboxContextProvider';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider, Theme } from './theme';

interface Props {
  components: Array<any>;
  logo?: React.ReactNode;
  theme?: Theme;
  plugins?: Array<any>;
}

function Sandbox(props: Props) {
  const {components, logo, theme, plugins} = props;

  return (
    <ThemeProvider theme={theme}>
      <SandboxContextProvider components={components} plugins={plugins}>
        <MainLayout components={components} logo={logo} />
      </SandboxContextProvider>
    </ThemeProvider>
  );
}

export default Sandbox;
