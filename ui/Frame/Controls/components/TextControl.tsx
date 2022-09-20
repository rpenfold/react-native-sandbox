import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {ControlDefinition} from '../../../../sandbox.types';
import sharedStyles from './sharedStyles';
import useSandbox from '../../../../src/useSandbox';
import { useTheme } from '../../../theme';

function TextControl(props: Omit<ControlDefinition, 'type'>) {
  const {updateControlValue} = useSandbox();
  const { colors } = useTheme();

  return (
    <View style={sharedStyles.formItem}>
      <Text style={[sharedStyles.label, { color: colors.text }]}>{props.label}</Text>
      <TextInput
        onChangeText={(val: string) => {
          updateControlValue(props.label, val);
        }}
        value={props.value}
        style={sharedStyles.formControl}
      />
    </View>
  );
}

export default TextControl;
