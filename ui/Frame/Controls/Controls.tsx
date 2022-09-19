import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SandboxContext from '../../../src/SandboxContext';
import Control from './Control';
import { useTheme } from '../../theme';

const styles = StyleSheet.create({
  container: {},
});

function Controls() {
  const {controls} = React.useContext(SandboxContext);
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { background: colors.background }]}>
      <SafeAreaView />
      {controls.map((control, index) => (
        <Control key={index} {...control} />
      ))}
    </View>
  );
}

export default Controls;
