import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Control from './Control';
import { useTheme } from 'react-native-sandbox/src/ui/theme';
import useControls from '../../useControls';

const styles = StyleSheet.create({
  container: {},
});

function Controls() {
  const {controls} = useControls();
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView />
      {controls.map((control, index) => (
        <Control key={index} {...control} />
      ))}
    </View>
  );
}

export default Controls;
