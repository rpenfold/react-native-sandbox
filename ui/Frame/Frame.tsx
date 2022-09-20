import React, { useState } from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import useSandbox from '../../src/useSandbox';
import NoSelectionEmptyState from './NoSelectionEmptyState';
import FrameContent from './layouts/FrameContent';
import { useTheme } from '../theme';
import Chip from '../components/Chip';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 8,
  },
});

const BACKGROUND_OPTIONS = ['white', 'black', 'gray'];
const LAYOUT_OPTIONS = ['horizontal', 'vertical'];
const GRID_SIZE_OPTIONS = [10, 20, 50];

function getNextArrayItem(arr) {
  return function (curr) {
    return arr[(arr.findIndex(val => val === curr) + 1) % arr.length];
  };
}

function Frame() {
  const context = useSandbox();
  const {colors} = useTheme();
  const { width } = useWindowDimensions();
  const [showGrid, setShowGrid] = useState(false);
  const [gridSize, setGridSize] = useState(20);
  const [gridType, setGridType] = useState('line');
  const [layout, setLayout] = useState(width < 600 ? 'vertical' : 'horizontal');
  const [background, setBackground] = useState(colors.background);

  if (!context) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  const {activeComponent, controls} = context;

  if (!activeComponent) {
    return <NoSelectionEmptyState />;
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.toolbar, { borderColor: colors.divider}]}>
        <Chip
          text={`Background: ${background}`}
          isSelected={true}
          onPress={() => { setBackground(getNextArrayItem(BACKGROUND_OPTIONS))}}
        />
        <Chip
          text={`Layout: ${layout}`}
          isSelected={true}
          onPress={() => { setLayout(getNextArrayItem(LAYOUT_OPTIONS))}}
        />
        <Chip
          text="Grid"
          isSelected={showGrid}
          onPress={() => { setShowGrid(curr => !curr)}}
        />
        {showGrid && (
          <Chip
            text={`Grid Size: ${gridSize}`}
            isSelected={true}
            onPress={() => { setGridSize(curr => GRID_SIZE_OPTIONS[(GRID_SIZE_OPTIONS.findIndex(val => val === curr) + 1) % GRID_SIZE_OPTIONS.length])}}
          />
        )}
        {showGrid && (
          <Chip
            text={`Grid Type: ${gridType}`}
            isSelected={true}
            onPress={() => { setGridType(curr => curr === 'line' ? 'dot' : 'line')}}
          />
        )}
      </View>
      <FrameContent
        layout={layout}
        background={background}
        gridSize={gridSize}
        gridType={gridType}
        showGrid={showGrid}
        controls={controls}
        activeComponent={activeComponent}
      />
    </View>
  );
}

export default Frame;
