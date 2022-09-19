import {ControlDefinition, ControlType} from '../../sandbox.types';

export default function label(_label: string): ControlDefinition {
  return {
    type: ControlType.Divider,
    label: _label,
    value: '',
  };
}
