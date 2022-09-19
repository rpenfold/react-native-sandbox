import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {ControlDefinition} from '../../sandbox.types';
import sharedStyles from './sharedStyles';
import useSandbox from '../../../../src/useSandbox';
import { useTheme } from '../../../theme';
import Chip from '../../../components/Chip';

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

function SelectControl(props: Omit<ControlDefinition, 'type'>) {
  const {options} = props;
  const {updateControlValue} = useSandbox();
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
                  updateControlValue(props.label, value);
                }}
              />
            );
          })}
      </View>
    </View>
  );
}

export default SelectControl;
