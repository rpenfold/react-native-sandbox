import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native';
import { useTheme } from '../../../theme';

export const TAB_HEIGHT = 28;

const styles = StyleSheet.create({
  tab: {
    justifyContent: 'center',
    height: TAB_HEIGHT,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderRightWidth: 1,
    // borderTopRightRadius: 4,
  },
});

interface TabDefinition {
    id: string;
    isSelected: boolean;
    title: string;
    activeColor?: string;
    onPress(id: string): void;
}

interface Props extends ViewProps {
    tabs: Array<TabDefinition>;
}

function TabGroup(props: Props) {
    const { tabs, ...rest } = props;
    const { colors } = useTheme();

    return (
        <View {...rest}>
            {tabs.map(({ id, title, activeColor, isSelected, onPress }) => (
                <TouchableOpacity
                    key={id}
                    style={[
                    styles.tab,
                    { borderColor: colors.divider, backgroundColor: colors.surface },
                    isSelected && { backgroundColor: activeColor ?? colors.background }
                    ]}
                    disabled={isSelected}
                    onPress={() => onPress(id)}
                    activeOpacity={0.75}
                >
                    <Text>{title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default TabGroup;
