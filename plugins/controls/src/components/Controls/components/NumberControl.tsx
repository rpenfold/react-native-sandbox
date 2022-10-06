import React from 'react';
import {Text, TextInput, View} from 'react-native';
import { ControlDefinition } from '../../../ControlsPluginContext';
import sharedStyles from './sharedStyles';
import { useTheme } from '../../../../../../ui/theme';
import useControls from '../../../useControls';

function NumberControl(props: Omit<ControlDefinition, 'type'>) {
  const {updateControlValue} = useControls();
  const { colors } = useTheme();

  return (
    <View style={sharedStyles.formItem}>
    <Text style={[sharedStyles.label, { color: colors.text }]}>{props.label}</Text>
      <TextInput
        onChangeText={(val: string) => {
          const sanitizedStr = val.replace(/[^0-9.]/g, '');
          const num = Number(sanitizedStr);
          updateControlValue(props._id, num);
        }}
        value={`${props.value}`}
        style={[sharedStyles.formControl, {color: colors.text}]}
        keyboardType={'decimal-pad'}
      />
    </View>
  );
}

export default NumberControl;
