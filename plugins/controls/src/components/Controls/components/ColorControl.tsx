import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import { ControlDefinition } from '../../../ControlsPluginContext';
import sharedStyles from './sharedStyles';
import { useTheme } from '../../../../../../ui/theme';
import useControls from '../../../useControls';

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  optionChip: {
    borderRadius: 4,
    height: 25,
    width: 50,
    backgroundColor: '#eaeaea',
    marginBottom: 4,
    marginRight: 4,
  },
  selectedChip: {
    padding: 2,
    // borderWidth: 4,
    // borderColor: '#4BB0CC',
  },
});

function ColorControl(props: Omit<ControlDefinition, 'type'>) {
  const {options} = props;
  const {updateControlValue} = useControls();
  const { colors } = useTheme();

  return (
    <View style={sharedStyles.formItem}>
    <Text style={[sharedStyles.label, { color: colors.text }]}>{props.label}</Text>
      <View style={styles.chipContainer}>
        {options &&
          options.map(({value, displayColor}: any) => {
            const isSelected = value === props.value;

            return (
              <Pressable
                key={value}
                style={[
                  styles.optionChip,
                  isSelected && styles.selectedChip,
                  {backgroundColor: displayColor ?? value},
                ]}
                onPress={() => {
                  updateControlValue(props._id, value);
                }}
              >
                {isSelected && (
                  <View style={{ flex: 1, backgroundColor: colors.background,padding: 2, borderRadius: 3}}>
                    <View style={{backgroundColor: displayColor ?? value, flex: 1 }}>
                      <Text style={{ textAlign: 'center', color: colors.background }}>✓</Text>
                    </View>
                  </View>
                )}
              </Pressable>
            );
          })}
      </View>
    </View>
  );
}

export default ColorControl;
