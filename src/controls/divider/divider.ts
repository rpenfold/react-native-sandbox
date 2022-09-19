import {ControlDefinition, ControlType} from '../../sandbox.types';

export default function divider(): ControlDefinition {
  return {
    type: ControlType.Divider,
    label: '',
    value: '',
  };
}
