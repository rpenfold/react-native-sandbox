import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useTheme } from 'react-native-sandbox/src/ui/theme';
import {ControlDefinition} from '../../../../../../sandbox.types';

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: '#eaeaea',
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 10,
  },
});

function LabelControl(props: Omit<ControlDefinition, 'type'>) {
  const { colors } = useTheme();
  return (
    <View style={styles.labelContainer}>
      <Text style={[{ color: colors.text }]}>{props.label}</Text>
    </View>
  );
}

export default LabelControl;
