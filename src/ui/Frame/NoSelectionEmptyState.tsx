import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useTheme } from '../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEAEA',
    flex: 1,
  },
});

function NoSelectionEmptyState() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text style={{ color: colors.text }}>No component selected</Text>
    </View>
  );
}

export default NoSelectionEmptyState;
