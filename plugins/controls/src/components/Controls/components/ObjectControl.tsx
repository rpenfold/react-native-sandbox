import React from 'react';
import {Text, TextInput, View} from 'react-native';
import { ControlDefinition } from '../../../ControlsPluginContext';
import sharedStyles from './sharedStyles';
import { useTheme } from 'react-native-sandbox/internal';
import useControls from '../../../useControls';

function sanitize(str: String) {
  return str.replace(/[“”]/, '"');
}

function ObjectControl(props: Omit<ControlDefinition, 'type'>) {
  const {updateControlValue} = useControls();
  const { colors } = useTheme();

  return (
    <View style={sharedStyles.formItem}>
    <Text style={[sharedStyles.label, { color: colors.text }]}>{props.label}</Text>
      <TextInput
        onChangeText={(val: string) => {
          try {
            const sanitized = sanitize(val);
            JSON.parse(sanitized);
            updateControlValue(props._id, sanitized);
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
            updateControlValue(props._id, JSON.stringify(obj, null, 2));
          } catch {
            // do nothing
          }
        }}
      />
    </View>
  );
}

export default ObjectControl;
