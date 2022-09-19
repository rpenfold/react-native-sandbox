import {ControlDefinition, ControlType} from '../../sandbox.types';

export default function bool(
  label: string,
  initialValue: boolean,
): ControlDefinition {
  return {
    type: ControlType.Boolean,
    label,
    value: initialValue,
  };
}
