import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';
import Controls from '../Controls';
import Grid from '../Grid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  frame: {
    flex: 1,
  },
  controls: {
    width: 250,
    borderLeftWidth: 1,
  },
});

export default function HorizontalFrameContent(props) {
  const { background, showGrid, gridType, gridSize, controls, activeComponent  } = props;
  const { colors } = useTheme();

  const Component = (activeComponent as any).component;

    return (
      <View style={styles.container}>
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
    )
}
