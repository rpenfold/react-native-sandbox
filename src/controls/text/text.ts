import {ControlDefinition, ControlType} from '../../sandbox.types';

export default function text(
  label: string,
  initialValue: number | string,
): ControlDefinition {
  return {
    type: ControlType.Text,
    label,
    value: initialValue,
  };
}
