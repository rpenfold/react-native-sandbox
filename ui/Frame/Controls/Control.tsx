import React from 'react';
import {ControlDefinition, ControlType} from '../../../sandbox.types';
import BoolControl from './components/BoolControl';
import ColorControl from './components/ColorControl';
import DividerControl from './components/DividerControl';
import InfoControl from './components/InfoControl';
import LabelControl from './components/LabelControl';
import NumberControl from './components/NumberControl';
import ObjectControl from './components/ObjectControl';
import SelectControl from './components/SelectControl';
import TextControl from './components/TextControl';

function Control(props: ControlDefinition) {
  const {type, ...rest} = props;

  switch (type) {
    case ControlType.Boolean:
      return <BoolControl {...rest} />;
    case ControlType.Color:
      return <ColorControl {...rest} />;
    case ControlType.Divider:
      return <DividerControl />;
    case ControlType.Label:
      return <LabelControl {...rest} />;
    case ControlType.Info:
      return <InfoControl {...rest} />;
    case ControlType.Number:
      return <NumberControl {...rest} />;
    case ControlType.Object:
      return <ObjectControl {...rest} />;
    case ControlType.Select:
      return <SelectControl {...rest} />;
    case ControlType.Text:
      return <TextControl {...rest} />;
    default:
      return null;
  }
}

export default Control;
