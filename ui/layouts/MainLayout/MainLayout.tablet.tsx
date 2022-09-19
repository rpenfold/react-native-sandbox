import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Menu from '../../Menu';
import UIFrame from '../../Frame';
import useSandbox from '../../../src/useSandbox';
import { useTheme } from '../../theme';
import { MainLayoutProps } from './MainLayout.types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
  },
  menuWrapper: {
    width: 250,
    borderWidth: 1,
    textAlign: 'left',
    height: '100%',
    overflowY: 'auto',
  },
  frame: {
    flexGrow: 1,
  },
});

function MainTabletLayout(props: MainLayoutProps) {
  const {components, logo} = props;
  const {activeComponent, setActiveComponent} = useSandbox();
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.menuWrapper, { borderRightColor: colors.divider}]}>
        <Menu
          activeComponent={activeComponent}
          components={components}
          onPress={setActiveComponent}
          logo={logo}
        />
      </Animated.View>
      <View style={styles.frame}>
        <UIFrame />
      </View>
    </View>
  );
}

export default MainTabletLayout;
