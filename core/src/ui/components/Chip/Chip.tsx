import React from 'react';
import {Pressable, StyleSheet, Text, ViewProps} from 'react-native';
import { useTheme } from '../../theme';

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 2,
    borderRadius: 8,
  },
});

interface Props extends ViewProps {
  children?: React.ReactNode;
  text?: string;
  isSelected?: boolean;
  onPress(): void;
}

function Chip(props: Props) {
  const { children, text, isSelected, onPress, style, ...rest } = props;
  const { colors } = useTheme();

  const content = text || typeof children === 'string'
    ? <Text style={{ color: colors.text }}>{text ?? children}</Text>
    : children;

  return (
    <Pressable
      style={[
          styles.chip,
          isSelected && { backgroundColor: colors.surface },
          style
      ]}
      onPress={onPress}
      {...rest}
    >
      {content}
    </Pressable>
  );
}

export default Chip;
