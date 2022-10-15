import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-sandbox/internal';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});

function Document(props) {
    const { content } = props;
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text>{content}</Text>
        </View>
    )
}

export default Document;
