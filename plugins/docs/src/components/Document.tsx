import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-sandbox/internal';
import DocsPluginContext from '../DocsPluginContext';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});

function Document() {
    const context = React.useContext(DocsPluginContext);
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text>{context.document}</Text>
        </View>
    )
}

export default Document;
