import {ControlDefinition, ControlType} from '../../sandbox.types';

export default function number(
  label: string,
  initialValue: string | number,
): ControlDefinition {
  return {
    type: ControlType.Number,
    label,
    value:
      typeof initialValue === 'string' ? Number(initialValue) : initialValue,
  };
}
