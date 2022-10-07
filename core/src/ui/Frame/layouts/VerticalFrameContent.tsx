import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';
import Grid from '../Grid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  frame: {
    flex: 1,
  },
  controls: {
    flex: 1,
    borderTopWidth: 1,
  },
});

export default function VerticalFrameContent(props) {
  const { background, showGrid, gridType, gridSize, activeComponent, componentPanels  } = props;
  const { colors } = useTheme();

  const Component = (activeComponent as any).component;
  const panel = componentPanels[0];
  const Panel = panel?.component;

    return (
      <View style={styles.container}>
        <View style={[styles.frame, { backgroundColor: background }]}>
          <Component />
          {showGrid && <Grid size={gridSize} type={gridType} />}
        </View>
        {!!Panel && (
          <View style={[styles.controls, { backgroundColor: colors.surface, borderColor: colors.divider }]}>
            <ScrollView>
              <Panel />
            </ScrollView>
          </View>
        )}
      </View>
    )
}
