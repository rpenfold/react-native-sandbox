import React, { useState } from 'react';
import {ScrollView, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import useSandbox from '../../useSandbox';
import NoSelectionEmptyState from './NoSelectionEmptyState';
import FrameContent from './layouts/FrameContent';
import { useTheme } from '../theme';
import Chip from '../components/Chip';
import Icon from '../components/Icon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  toolbar: {
    flexGrow: 0,
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 8,
  },
  toolbarGroup: {
    flexDirection: 'row',
  },
  itemWrapper: {

  },
  divider: {
    alignSelf: 'center',
    height: '80%',
    width: 1,
    marginHorizontal: 8,
  }
});

const BACKGROUND_OPTIONS = ['white', 'black', 'gray'];
const LAYOUT_OPTIONS = ['horizontal', 'vertical'];

function getNextArrayItem(arr) {
  return function (curr) {
    return arr[(arr.findIndex(val => val === curr) + 1) % arr.length];
  };
}

function Frame() {
  const context = useSandbox();
  const {colors} = useTheme();
  const { width } = useWindowDimensions();
  const [layout, setLayout] = useState(width < 600 ? 'vertical' : 'horizontal');
  const [background, setBackground] = useState(colors.background);

  if (!context) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  const {activeComponent, componentPanels, toolbarGroups} = context;

  if (!activeComponent) {
    return <NoSelectionEmptyState />;
  }

  const divider =  <View style={[styles.divider, { backgroundColor: colors.divider }]} />

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        style={[styles.toolbar, { borderColor: colors.divider}]}
        contentContainerStyle={{ justifyContent: 'center' }}
        horizontal
      >
        <Chip onPress={() => { setLayout(getNextArrayItem(LAYOUT_OPTIONS))}}>
          <Icon name={layout === 'vertical' ? 'view-split-horizontal' : 'view-split-vertical'} />
        </Chip>
       {divider}
        {toolbarGroups.map((group, groupIndex) => (
          <View key={group.id} style={styles.toolbarGroup}>
            {group.items.map(({ id, component: ToolbarItem }, itemIndex) => (
              <ToolbarItem key={id} style={{ marginRight: itemIndex < group.items.length ? 4 : 0 }} />
            ))}
            {group.items.length > 1 && groupIndex < toolbarGroups.length - 1 && (
              divider
            )}
          </View>
        ))}
        <Chip
          text={`Background: ${background}`}
          isSelected={true}
          onPress={() => { setBackground(getNextArrayItem(BACKGROUND_OPTIONS))}}
        />
      </ScrollView>
      <FrameContent
        layout={layout}
        background={background}
        activeComponent={activeComponent}
        componentPanels={componentPanels}
      />
    </View>
  );
}

export default Frame;
