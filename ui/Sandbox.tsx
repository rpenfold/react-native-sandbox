import React from 'react';
import SandboxContextProvider from '../src/SandboxContextProvider';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider, Theme } from './theme';

interface Props {
  components: Array<any>;
  logo?: React.ReactNode,
  theme?: Theme;
}

function Sandbox(props: Props) {
  const {components, logo, theme} = props;

  return (
    <ThemeProvider theme={theme}>
      <SandboxContextProvider components={components}>
        <MainLayout components={components} logo={logo} />
      </SandboxContextProvider>
    </ThemeProvider>
  );
}

export default Sandbox;
