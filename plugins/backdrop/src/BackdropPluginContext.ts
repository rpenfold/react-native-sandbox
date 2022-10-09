import React from 'react';
import { Image } from 'react-native';

export type Backdrop = string | Image | null;

export interface BackdropPluginContextData {
    backdrop: Backdrop;
    setBackdrop(backdrop: Backdrop): void;
} 

const BackdropPluginContext = React.createContext<BackdropPluginContextData>({
    backdrop: 'transparent',
    setBackdrop: () => console.warn('backdrop not ready'),
});
  
  export default BackdropPluginContext;
