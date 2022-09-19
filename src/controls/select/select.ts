import {ControlDefinition, ControlType} from '../../sandbox.types';

export default function select(
  label: string,
  initialValue: number | string,
  options: Array<{label: string; value: string}>,
): ControlDefinition {
  return {
    type: ControlType.Select,
    label,
    value: initialValue,
    options,
  };
}
