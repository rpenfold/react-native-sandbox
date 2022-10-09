import React from 'react';
import { Image, ImageProps } from 'react-native';
import { useTheme } from '../../theme';
import getIconByName from './assets';

export type IconName = 'cancel' | 'circle' | 'circle-opacity' | 'dots-grid' | 'grid' | 'grid-large' | 'grid-off' | 'view-split-horizontal' | 'view-split-vertical';

interface Props extends ImageProps {
    color?: string;
    name: IconName;
    size?: number;
}

const DEFAULT_ICON_SIZE = 18;

function Icon(props: Props) {
    const { colors } = useTheme();
    const { name, size = DEFAULT_ICON_SIZE, color = colors.text, style, ...rest } = props;
    const icon = getIconByName(name)
    const { height, width } = Image.resolveAssetSource(icon);

    return (
        <Image
            source={icon}
            style={[{
                height: size,
                width: (height / width) * size,
                tintColor: color,
            }, style]}
            resizeMode="contain"
            resizeMethod='resize'
            {...rest}
        />
    )
}

Icon.DefaultSize = DEFAULT_ICON_SIZE;

export default Icon;
