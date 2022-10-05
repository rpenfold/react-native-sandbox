import {ReactNode} from 'react';

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

export type InfoLevel = 'info' | 'warning' | 'error' | 'success';

export interface ControlDefinition {
  type: ControlType;
  label: string;
  value: any;
  options?: Array<{label: string; value: string | number}>;
}

export interface SandboxContextData {
  activeComponent: any;
  components: Array<ReactNode>;
  setActiveComponent(component: any): void;
  clearControls(): void;
  registerControl(control: ControlDefinition): any;
  removeControl(control: ControlDefinition | string): void;
  updateControl(control: Partial<ControlDefinition>): void;
  updateControlValue(label: string, value: any): void;
  controls: Array<ControlDefinition>;
}
