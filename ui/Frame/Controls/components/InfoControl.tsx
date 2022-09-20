import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useTheme } from '../../../theme';
import {ControlDefinition} from '../../../../sandbox.types';

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: '#eaeaea',
    padding: 8,
    borderRadius: 8,
    margin: 8,
  },
});

function InfoControl(props: Omit<ControlDefinition, 'type'>) {
    const { value: { level } } = props;
  const { colors } = useTheme();
  const backgroundColor = colors[level];
  
  return (
    <View style={[styles.infoContainer, { backgroundColor }]}>
      <Text style={[{ color: 'white' }]}>{props.label}</Text>
    </View>
  );
}

export default InfoControl;

