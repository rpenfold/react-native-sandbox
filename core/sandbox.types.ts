import {ComponentType, ReactNode} from 'react';

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

export interface PanelDefinition {
  id: string;
  title: string;
  component: ReactNode | ComponentType;
  activeTabColor?: string;
}

export interface SandboxContextData {
  activeComponent: any;
  activePanel: string | null;
  components: Array<ReactNode>;
  componentPanels: Array<PanelDefinition>;
  registerComponentPanel(panel: PanelDefinition): void;
  setActiveComponent(component: any): void;
  setActivePanel(id: string): void;
}

export interface Plugin {
  provider: ReactNode;
}
