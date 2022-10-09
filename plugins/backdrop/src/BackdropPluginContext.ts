import React from 'react';
import { Image } from 'react-native';

export type Backdrop = string | Image | null;

export interface BackdropPluginContextData {
    backdrop: Backdrop;
    disabled: boolean;
    setBackdrop(backdrop: Backdrop): void;
} 

const BackdropPluginContext = React.createContext<BackdropPluginContextData>({
    backdrop: 'transparent',
    disabled: false,
    setBackdrop: () => console.warn('backdrop not ready'),
});
  
  export default BackdropPluginContext;
