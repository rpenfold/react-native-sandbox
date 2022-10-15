import React from 'react';
import {StyleSheet, View} from 'react-native';
import { useTheme } from 'react-native-sandbox/internal';

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    marginVertical: 10,
  },
});

function DividerControl() {
  const { colors } = useTheme();
  return <View style={[styles.divider, { backgroundColor: colors.divider }]} />;
}

export default DividerControl;
