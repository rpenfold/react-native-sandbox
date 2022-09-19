import React, {ReactNode} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useTheme } from '../theme';

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  title: {
    margin: 12,
    flex: 1,
  },
  expandIndicator: {
    padding: 10,
    color: '#555',
  },
  subItemGroup: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  subItem: {
    padding: 8,
    marginLeft: 16,
  },
});

interface Props {
  activeComponent: any;
  subItems: Record<string, ReactNode>;
  title: string;
  onPress(component: ReactNode): void;
}

function MenuItem(props: Props) {
  const {activeComponent, subItems, title, onPress} = props;
  const [collapsed, setCollapsed] = React.useState<boolean>(true);
  const indicatorAnim = React.useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();
  const rotate = indicatorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={() => {
          Animated.timing(indicatorAnim, {
            toValue: (indicatorAnim as any)._value ? 0 : 1,
            duration: 100,
            useNativeDriver: false,
          }).start(() => setCollapsed(!collapsed));
        }}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
          {title}
        </Text>
        <Animated.Text
          style={[styles.expandIndicator, {transform: [{rotateZ: rotate}]}]}>
          ▶
        </Animated.Text>
      </TouchableOpacity>
      <Animated.View>
        <Collapsible collapsed={collapsed}>
          <View style={[styles.subItemGroup, { backgroundColor: colors.surface, borderColor: colors.divider }]}>
            {Object.keys(subItems).map((key) => {
              const isSelected =
                activeComponent?.group === title &&
                activeComponent.name === key;
              return (
                <TouchableOpacity
                  key={key}
                  style={styles.subItem}
                  onPress={() => {
                    onPress({
                      group: title,
                      name: key,
                      component: subItems[key],
                    });
                  }}>
                  <Text style={{color: colors.text}}>{key}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Collapsible>
      </Animated.View>
    </View>
  );
}

export default MenuItem;
