import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ControlDefinition } from '../../../ControlsPluginContext';
import sharedStyles from './sharedStyles';
import { useTheme } from 'react-native-sandbox/src/ui/theme';
import Chip from 'react-native-sandbox/src/ui/components/Chip';
import useControls from '../../../useControls';

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

function SelectControl(props: Omit<ControlDefinition, 'type'>) {
  const {options} = props;
  const {updateControlValue} = useControls();
  const { colors } = useTheme();

  return (
    <View style={sharedStyles.formItem}>
    <Text style={[sharedStyles.label, { color: colors.text }]}>{props.label}</Text>
      <View style={styles.chipContainer}>
        {options &&
          options.map(({label, value}: any) => {
            const isSelected = value === props.value;

            return (
              <Chip
                key={value}
                text={label} 
                isSelected={isSelected}
                onPress={() => {
                  updateControlValue(props._id, value);
                }}
              />
            );
          })}
      </View>
    </View>
  );
}

export default SelectControl;
