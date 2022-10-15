import React from 'react';
import { Animated, Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    shade: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000',
    },
    drawerContainer: {
        height: '100%',
        elevation: 12,
        position: 'absolute',
    },
})

export enum DrawerPosition {
    Right = 'right',
    Left = 'left',
}

interface Props {
    children: any;
    open: boolean;
    position?: DrawerPosition;
    width: number;
    onClose(): void;
    requestClose(): void;
}

function Drawer(props: Props) {
    const { width: screenWidth } = useWindowDimensions();
    const { onClose, open, width = screenWidth, position = DrawerPosition.Right } = props;
    const posAnim = React.useRef(new Animated.ValueXY({x: -width, y: 0})).current;
    const shadeAnim = React.useRef(new Animated.Value(0)).current;

    const animateTo = (x = 0, y = 0, shouldClose = false) => {
        const isOpening = x === 0 && y === 0;
        const animDuration = isOpening ? 250 : 100;

        Animated.parallel([
            // animate the positions of the drawer
            Animated.timing(posAnim, {
                toValue: { x, y },
                useNativeDriver: true,
                duration: animDuration,
            }),
            // animate the shade opacity
            Animated.timing(shadeAnim, {
                toValue: x === 0 && y === 0 ? 0.35 : 0,
                useNativeDriver: true,
                duration: animDuration,
            })
        ])
        .start(() => {
            if (shouldClose) {
                onClose();
            }
        });
    }

    React.useEffect(() => {
        if (!open) {
            animateTo(-width);
        } else {
            animateTo(0);
        }
    }, [open]);


    if (!open) {
        return null;
    }
    
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.shade, { opacity: shadeAnim }]}>
                <Pressable style={{ flex: 1 }} onPress={props.requestClose} />
            </Animated.View>
            <Animated.View style={[
                    styles.drawerContainer,
                    {
                        width,
                        [position === DrawerPosition.Right ? 'right' : 'left']: 0,
                        transform: [
                            { translateX: posAnim.x.interpolate(
                                position === DrawerPosition.Right
                                    ? { inputRange: [0,1], outputRange: [0, -1]}
                                    : { inputRange: [0,1], outputRange: [0, 1]}
                                )
                            },
                            { translateY: posAnim.y },
                        ]
                    }
                ]}
            >
                {props.children}
            </Animated.View>
        </View>
    )
}

export default Drawer;
