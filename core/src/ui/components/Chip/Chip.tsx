import React from 'react';
import {Pressable, PressableProps, StyleSheet, Text, ViewStyle} from 'react-native';
import { useTheme } from '../../theme';

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 2,
    borderRadius: 8,
  },
});

interface Props extends PressableProps {
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
          style as ViewStyle,
      ]}
      onPress={onPress}
      {...rest}
    >
      {content}
    </Pressable>
  );
}

export default Chip;
