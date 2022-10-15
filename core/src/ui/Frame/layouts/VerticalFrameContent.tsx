import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import useSandbox from '../../../useSandbox';
import { useTheme } from '../../theme';
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
  const { activeComponent, componentPanels  } = props;
  const { activePanel, setActivePanel, layers } = useSandbox();
  const { colors } = useTheme();

  const Component = (activeComponent as any).component;
  const panel = activePanel
    ? componentPanels.find(p => p.id === activePanel)
    : componentPanels[0];
  const Panel = panel?.component;

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        {layers.filter(l => l.level !== undefined  && l.level < 0).map(({ id, component: Layer }) => (
          <View key={id} style={StyleSheet.absoluteFill} pointerEvents="none">
            <Layer />
          </View>
        ))}
        <React.Suspense fallback={<Text>Loading.....</Text>}>
          <Component />
        </React.Suspense>
        {layers.filter(l => l.level === undefined || l.level >= 0).map(({ id, component: Layer }) => (
          <View key={id} style={StyleSheet.absoluteFill} pointerEvents="none">
            <Layer />
          </View>
        ))}
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
  );
}
