import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DocsPluginContext from '../DocsPluginContext';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});

function Document() {
    const context = React.useContext(DocsPluginContext);

    return (
        <View style={styles.container}>
            <Text>{context.document}</Text>
        </View>
    )
}

export default Document;
