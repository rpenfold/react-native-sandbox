import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useSandbox from '../../../useSandbox';
import { useTheme } from '../../theme';
import Grid from '../Grid';
import TabGroup from './components/TabGroup';

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
  tabGroup: {
    bottom: '100%',
    position: 'absolute',
    flexDirection: 'row',
  },
});

export default function VerticalFrameContent(props) {
  const { background, showGrid, gridType, gridSize, activeComponent, componentPanels  } = props;
  const { activePanel, setActivePanel } = useSandbox();
  const { colors } = useTheme();

  const Component = (activeComponent as any).component;
  const panel = activePanel
    ? componentPanels.find(p => p.id === activePanel)
    : componentPanels[0];
  const Panel = panel?.component;

    return (
      <View style={styles.container}>
        <View style={[styles.frame, { backgroundColor: background }]}>
          <Component />
          {showGrid && <Grid size={gridSize} type={gridType} />}
        </View>
        {!!Panel && (
          <View style={[styles.controls, { borderColor: colors.divider }]}>
            <TabGroup
              style={styles.tabGroup}
              tabs={componentPanels.map((p) => ({
                id: p.id,
                title: p.title,
                activeColor: p.activeTabColor,
                isSelected: p.id === panel.id,
                onPress: setActivePanel
              }))}
            />
            <ScrollView>
              <Panel />
            </ScrollView>
          </View>
        )}
      </View>
    )
}
