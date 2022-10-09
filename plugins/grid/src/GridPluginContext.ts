import React from 'react';

export type GridType = 'line' | 'dot';

export interface GridPluginContextData {
    enabled: boolean;
    size: number;
    color: string;
    type: GridType;
    setEnabled(enabled: boolean): void;
    setSize(size: number): void;
    setColor(color: string): void; 
    setType(type: GridType): void;
} 
 

const GridPluginContext = React.createContext<GridPluginContextData>({
    enabled: false,
    size: 0,
    color: '',
    type: 'line',
    setEnabled: () => console.warn('grid not ready'),
    setSize: () => console.warn('grid not ready'),
    setColor: () => console.warn('grid not ready'),
    setType: () => console.warn('grid not ready'),
});
  
  export default GridPluginContext;
