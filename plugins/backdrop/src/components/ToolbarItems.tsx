import React from 'react';
import { View } from 'react-native';
import BackdropPluginContext from '../BackdropPluginContext';
import { BACKGROUND_OPTIONS } from '../BackdropPluginContextProvider';
import { getNextArrayItem } from 'react-native-sandbox/internal'; 
import { Chip, Icon } from 'react-native-sandbox/components';

export function ColorChip() {
    const { backdrop, setBackdrop } = React.useContext(BackdropPluginContext);
    let content: string | React.ReactNode = `${backdrop}`;

    if (backdrop === null) {
        content = <Icon name="circle-opacity" />
    } else if (typeof backdrop === 'string') {
        content = (
            <View
                style={{
                    margin: 1,
                    backgroundColor: backdrop,
                    borderWidth: 1,
                    borderRadius: 50,
                    height: Icon.DefaultSize - 2,
                    width: Icon.DefaultSize - 2
                }}
            />
        );
    }

    return (
        <Chip onPress={() => setBackdrop(getNextArrayItem(BACKGROUND_OPTIONS)(backdrop))} >
            {content}
        </Chip>
    );
}
