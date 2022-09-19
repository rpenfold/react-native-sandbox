import React, { useState } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Controls from './Controls';
import useSandbox from '../../src/useSandbox';
import NoSelectionEmptyState from './NoSelectionEmptyState';
import { useTheme } from '../theme';
import Grid from './Grid';
import Chip from '../components/Chip';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  frameContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  frame: {
    flex: 1,
  },
  toolbar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 8,
  },
  controls: {
    width: 250,
    borderLeftWidth: 1,
  },
});

const BACKGROUND_OPTIONS = ['white', 'black', 'gray'];
const GRID_SIZE_OPTIONS = [10, 20, 50];

function getNextArrayItem(arr) {
  return function (curr) {
    return arr[(arr.findIndex(val => val === curr) + 1) % arr.length];
  };
}

function Frame() {
  const context = useSandbox();
  const {colors} = useTheme();
  const [showGrid, setShowGrid] = useState(false);
  const [gridSize, setGridSize] = useState(20);
  const [gridType, setGridType] = useState('line');
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

  const Component = (activeComponent as any).component;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.toolbar, { borderColor: colors.divider}]}>
        <Chip
          text={`Background: ${background}`}
          isSelected={true}
          onPress={() => { setBackground(getNextArrayItem(BACKGROUND_OPTIONS))}}
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
      <View style={styles.frameContainer}>
        <View style={[styles.frame, { backgroundColor: background }]}>
          <Component />
          {showGrid && <Grid size={gridSize} type={gridType} />}
        </View>
        {activeComponent && !!controls.length && (
          <View style={[styles.controls, { borderLeftColor: colors.divider }]}>
            <ScrollView>
              <Controls />
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
}

export default Frame;
