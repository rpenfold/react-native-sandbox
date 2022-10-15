import {ComponentType, ReactNode} from 'react';
import { ViewStyle } from 'react-native';

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

export type ComponentDefinition = {
  component: ReactNode;
  plugins: Record<string, boolean>
};

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

export interface LayerDefinition {
  id: string;
  component: ComponentType;
  level?: number;
}

export interface ToolbarItemDefinition {
  id: string;
  component: ComponentType<{ style: ViewStyle }>;
}

export interface ToolbarGroupDefinition {
  id: string;
  items: Array<ToolbarItemDefinition>;
}

export interface SandboxContextData {
  activeComponent: any;
  activePanel: string | null;
  components: Array<ReactNode>;
  componentPanels: Array<PanelDefinition>;
  layers: Array<LayerDefinition>;
  toolbarGroups: Array<ToolbarGroupDefinition>;
  registerComponentPanel(panel: PanelDefinition): void;
  registerLayer(layer: LayerDefinition): void;
  registerToolbarGroup(group: ToolbarGroupDefinition): void;
  setActiveComponent(component: any): void;
  setActivePanel(id: string): void;
}

export interface SandboxPlugin {
  id: string;
  provider: ReactNode;
  configure(options: Record<string, unknown>): void;
}
