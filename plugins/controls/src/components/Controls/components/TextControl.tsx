import React from 'react';
import {Text, TextInput, View} from 'react-native';
import { ControlDefinition } from '../../../ControlsPluginContext';
import sharedStyles from './sharedStyles';
import { useTheme } from 'react-native-sandbox/internal';
import useControls from '../../../useControls';

function TextControl(props: Omit<ControlDefinition, 'type'>) {
  const {updateControlValue} = useControls();
  const { colors } = useTheme();

  return (
    <View style={sharedStyles.formItem}>
      <Text style={[sharedStyles.label, { color: colors.text }]}>{props.label}</Text>
      <TextInput
        onChangeText={(val: string) => {
          updateControlValue(props._id, val);
        }}
        value={props.value}
        style={sharedStyles.formControl}
      />
    </View>
  );
}

export default TextControl;
