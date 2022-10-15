import React from 'react';
import { ScrollView, Text } from 'react-native';

function LazyComponent() {
    return (
        <ScrollView>
            <Text>This component was loaded lazily</Text>
            {Array(1000).fill().map((_, i) => (<Text key={i}>Row {i}</Text>))}
        </ScrollView>
    );
}

export default LazyComponent;
