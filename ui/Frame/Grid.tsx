import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';

const LINE_WIDTH = 1;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'row',
  },
  horizontalLine: {
    width: '100%',
    height: LINE_WIDTH,
    backgroundColor: 'red',
  },
  verticalLine: {
    height: '100%',
    width: LINE_WIDTH,
    backgroundColor: 'red',
  },
});

interface Props {
  size?: number;
  color?: string;
  type?: 'line' | 'dot'
}

function Grid(props: Props) {
  const {size = 20, color = 'rgba(0, 0, 0, 0.15)', type = 'line'} = props;
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  let grid;

  if (type === 'dot') {
    grid = (
      <React.Fragment>
        {Array(Math.floor(width / size)).fill(0).map((_, i) => (
          <View key={i}>

            {Array(Math.floor(height / size)).fill(0).map((_, i) => (
              <View key={i} style={{ height: 2, width: 2, backgroundColor: color, marginLeft: size - 2, marginTop: size - 2 }}>

              </View>
            ))}

          </View>
        ))}
      </React.Fragment>
    );
  } else {
    grid = (
      <React.Fragment>
        <View style={styles.container}>
          {Array(Math.floor(width / size))
            .fill(0)
            .map((_, i) => (
              <View key={i} style={[styles.verticalLine, {marginLeft: size - LINE_WIDTH, backgroundColor: color}]} />
            ))}
        </View>
        <View style={[styles.container, {flexDirection: 'column'}]}>
          {Array(Math.floor(height / size))
            .fill(0)
            .map((_, i) => (
              <View key={i} style={[styles.horizontalLine, {marginTop: size - LINE_WIDTH, backgroundColor: color}]} />
            ))}
        </View>
      </React.Fragment>
    );
  }


  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent: { layout } }) => {
        setWidth(layout.width);
        setHeight(layout.height);
      }}
      pointerEvents="none"
    >
      {!!(size && width && height) && (
        grid
      )}
    </View>
  );
}

export default Grid;
