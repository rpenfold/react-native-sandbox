import React, { useEffect, useRef, useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Menu from '../../Menu';
import UIFrame from '../../Frame';
import useSandbox from '../../../src/useSandbox';
import { useTheme } from '../../theme';
import { MainLayoutProps } from './MainLayout.types';
import Drawer, { DrawerPosition } from '../../components/Drawer';

const MENU_WIDTH = 250;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  appBar: {
    alignItems: 'center',
    borderBottomWidth: 1,
    minHeight: 50,
    flexDirection: 'row',
  },
  titleWrapper: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
  },
  appContent: {
    flex: 1,
    flexDirection: 'row',
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginVertical: 8,
    marginHorizontal: 6,
    borderRadius: 8,
  },
  menuIcon: {
    textAlign: 'center',
    transform: [{ translateY: 2 }],
    fontSize: 36,
  },
  frame: {
    flexGrow: 1,
  },
});

function MainPhoneLayout(props: MainLayoutProps) {
  const {components, logo} = props;
  const {activeComponent, setActiveComponent} = useSandbox();
  const [showMenu, setShowMenu] = useState(false);
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <SafeAreaView style={[styles.appBar, { borderBottomColor: colors.divider, backgroundColor: colors.background }]}>
        <TouchableHighlight
          onPress={() => { setShowMenu(true) }}
          style={styles.menuButton}
          underlayColor={colors.surface}
        >
          <Text style={[styles.menuIcon, { color: colors.text }]}>☰</Text>
        </TouchableHighlight>
        {activeComponent && (
          <View style={[styles.titleWrapper, { backgroundColor: colors.surface }]}>
            <Text style={[styles.title, { color: colors.text }]}>
              {activeComponent?.group}&nbsp;|&nbsp;
            </Text>
            <Text style={[styles.title, { color: colors.disabled }]}>
              {activeComponent?.name}
            </Text>
          </View>
        )}
      </SafeAreaView>
      <View style={styles.appContent}>
        <View style={styles.frame}>
          <UIFrame />
        </View>
      </View>
        <Drawer
          open={showMenu}
          onClose={() => { }}
          requestClose={() => { setShowMenu(false) }}
          position={DrawerPosition.Left}
          width={MENU_WIDTH}
        >
          <Menu
            activeComponent={activeComponent}
            components={components}
            onPress={(...args) => {
              setActiveComponent.apply(null, args);
              setTimeout(setShowMenu.bind(null, false), 200);
            }}
            logo={logo}
          />
        </Drawer>
    </View>
  );
}

export default MainPhoneLayout;
