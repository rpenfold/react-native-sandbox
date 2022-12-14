import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import useSandbox from '../../../useSandbox';
import { useTheme } from '../../theme';
import TabGroup, { TAB_HEIGHT } from './components/TabGroup';

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
  tabGroup: {
    right: '100%',
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
  },
});

export default function HorizontalFrameContent(props) {
  const { activeComponent, componentPanels  } = props;
  const { activePanel, setActivePanel, layers } = useSandbox();
  const { colors } = useTheme();
  const [tabsWidth, setTabsWidth] = React.useState<number>(0);

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
        <React.Suspense fallback={null}>
          <Component />
        </React.Suspense>
        {layers.filter(l => l.level === undefined || l.level >= 0).map(({ id, component: Layer }) => (
          <View key={id} style={StyleSheet.absoluteFill} pointerEvents="none">
            <Layer />
          </View>
        ))}
      </View>
      {!!panel && (
        <View style={[styles.controls, { borderLeftColor: colors.divider }]}>
          <TabGroup
            style={[
              styles.tabGroup,
              tabsWidth === 0
                ? { height: 0 }
                : {
                  transform: [{ translateX: ((tabsWidth - TAB_HEIGHT) / 2) }, { rotate: '270deg' }, { translateX: ((tabsWidth - TAB_HEIGHT) / 2) }]
                },
            ]}
            tabs={componentPanels.map((p) => ({
              id: p.id,
              title: p.title,
              activeColor: p.activeTabColor,
              isSelected: p.id === panel.id,
              onPress: setActivePanel
            }))}
            onLayout={(e) => setTabsWidth(e.nativeEvent.layout.width)}
          />
          <ScrollView>
            <Panel />
          </ScrollView>
        </View>
      )}
    </View>
  )
}
