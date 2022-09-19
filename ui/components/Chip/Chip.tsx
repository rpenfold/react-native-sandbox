import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import { useTheme } from '../../theme';

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 4,
    marginBottom: 2,
    borderRadius: 8,
  },
});

function Chip(props) {
  const { text, isSelected, onPress } = props;
  const { colors } = useTheme();

  return (
    <Pressable
      style={[
          styles.chip,
          isSelected && { backgroundColor: colors.surface }
      ]}
      onPress={onPress}>
      <Text style={{ color: colors.text }}>{text}</Text>
    </Pressable>
  );
}

export default Chip;
