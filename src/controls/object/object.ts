import {ControlDefinition, ControlType} from '../../sandbox.types';

export default function object(
  label: string,
  initialValue: string | number,
): ControlDefinition {
  return {
    type: ControlType.Object,
    label,
    value:
      typeof initialValue === 'string'
        ? initialValue
        : JSON.stringify(initialValue),
  };
}
