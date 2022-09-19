import {ControlDefinition, ControlType} from '../../sandbox.types';

export default function color(
  label: string,
  initialValue: string,
  colors: Array<{label: string; value: string; displayColor?: string}>,
): ControlDefinition {
  return {
    type: ControlType.Color,
    label,
    value: initialValue,
    options: colors,
  };
}
