import React from 'react';

export enum ControlType {
    Boolean = 'boolean',
    Color = 'color',
    Divider = 'divider',
    Label = 'label',
    Number = 'number',
    Object = 'object',
    Select = 'select',
    Text = 'text',
    Info = 'info',
  }

export interface ControlDefinition {
    type: ControlType;
    label: string;
    value: any;
    options?: Array<{label: string; value: string | number}>;
    componentName: string;
    _id: number;
  }
  
  export interface ControlsPluginContext {
    clearControls(): void;
    registerControl(control: Omit<ControlDefinition, 'componentName'>): any;
    removeControl(id: number): void;
    updateControl(id: number, changes: Partial<ControlDefinition>): void;
    updateControlValue(id: number, value: any): void;
    controls: Array<ControlDefinition>;
  }

  export type InfoLevel = 'info' | 'warning' | 'error' | 'success';

const ControlsPluginContext = React.createContext<ControlsPluginContext>({
  clearControls: () => console.warn('controls plugin not ready'),
  registerControl: () => console.warn('controls plugin not ready'),
  removeControl: () => console.warn('controls plugin not ready'),
  updateControl: () => console.warn('controls plugin not ready'),
  updateControlValue: () => console.warn('controls plugin not ready'),
  controls: [],
});

export default ControlsPluginContext;
