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
  options?: Array<{label: string; value: string}>;
}

export interface SandboxContextData {
  activeComponent: ReactNode;
  components: Array<ReactNode>;
  docs?: string;
  setActiveComponent(component: ReactNode): void;
  clearControls(): void;
  loadControls(controls: Record<string, ControlDefinition>): void;
  registerDocs(content: string): void;
  registerControl(control: ControlDefinition): any;
  updateControlValue(label: string, value: any): void;
  controls: Array<ControlDefinition>;
}
