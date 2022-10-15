import React from 'react';
import {Text, Switch, View} from 'react-native';
import { ControlDefinition } from '../../../ControlsPluginContext';
import sharedStyles from './sharedStyles';
import { useTheme } from 'react-native-sandbox/internal';
import useControls from '../../../useControls';

const DARK_GREY = '#767577';

function BoolControl(props: Omit<ControlDefinition, 'type'>) {
  const {updateControlValue} = useControls();
  const { colors } = useTheme();

  return (
    <View style={sharedStyles.formItem}>
    <Text style={[sharedStyles.label, { color: colors.text }]}>{props.label}</Text>
      <Switch
        trackColor={{false: DARK_GREY, true: '#CCC'}}
        thumbColor={props.value ? '#CCC' : '#f4f3f4'}
        onValueChange={(val: boolean) => {
          updateControlValue(props._id, val);
        }}
        value={props.value}
      />
    </View>
  );
}

export default BoolControl;
