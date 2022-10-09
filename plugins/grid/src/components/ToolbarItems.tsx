import GridPluginContext from '../GridPluginContext';
import React from 'react';
import getNextArrayItem from 'react-native-sandbox/src/utils/getNextArrayItem'; 
import Chip from 'react-native-sandbox/src/ui/components/Chip';
import Icon from 'react-native-sandbox/src/ui/components/Icon';
import { GRID_SIZE_OPTIONS, GRID_TYPE } from '../GridPluginContextProvider';

export function SizeChip(props) {
    const { style } = props;
    const { enabled, size, setEnabled, setSize } = React.useContext(GridPluginContext);
    const sharedProps = { style, isSelected: false };

    if (!enabled) {
        return (
            <Chip onPress={() => setEnabled(!enabled)} {...sharedProps}>
                <Icon name={"grid-off"} />
            </Chip>
        );
    }

    if (size <= 10) {
        return (
            <Chip
                onPress={() => setSize(getNextArrayItem(GRID_SIZE_OPTIONS)(size))}
                {...sharedProps}
            >
                <Icon name={"grid"} size={10} style={{height: Icon.DefaultSize}} />
            </Chip>
        );
    }

    if (size < 50) {
        return (
            <Chip onPress={() => setSize(getNextArrayItem(GRID_SIZE_OPTIONS)(size))} {...sharedProps}>
                <Icon name={"grid"} size={14} style={{height: Icon.DefaultSize}} />
            </Chip>
        );
    }

    return (
        <Chip
            onPress={() => {
                setEnabled(false)
                setSize(GRID_SIZE_OPTIONS[0])
            }}
            {...sharedProps}
        >
            <Icon name={"grid"} />
        </Chip>
    );
}

export function TypeChip() {
    const { enabled, type, setType } = React.useContext(GridPluginContext);

    return (
        <Chip onPress={() => setType(getNextArrayItem(GRID_TYPE)(type))} >
            <Icon name={type === "dot" ? "dots-grid" : "grid-large"} />
        </Chip>
    );
}
