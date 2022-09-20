import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {ControlDefinition} from '../../../../sandbox.types';
import sharedStyles from './sharedStyles';
import useSandbox from '../../../../src/useSandbox';
import { useTheme } from '../../../theme';

function sanitize(str: String) {
  return str.replace(/[“”]/, '"');
}

function ObjectControl(props: Omit<ControlDefinition, 'type'>) {
  const {updateControlValue} = useSandbox();
  const { colors } = useTheme();

  return (
    <View style={sharedStyles.formItem}>
    <Text style={[sharedStyles.label, { color: colors.text }]}>{props.label}</Text>
      <TextInput
        onChangeText={(val: string) => {
          try {
            const sanitized = sanitize(val);
            JSON.parse(sanitized);
            updateControlValue(props.label, sanitized);
          } catch {
            // do nothing
          }
        }}
        multiline
        numberOfLines={8}
        value={props.value}
        style={sharedStyles.formControl}
        autoCapitalize="none"
        autoCorrect={false}
        onBlur={({nativeEvent: {text}}) => {
          try {
            const obj = JSON.parse(text);
            updateControlValue(props.label, JSON.stringify(obj, null, 2));
          } catch {
            // do nothing
          }
        }}
      />
    </View>
  );
}

export default ObjectControl;
