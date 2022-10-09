import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Backdrop } from '../BackdropPluginContext';

interface Props {
  backdrop: Backdrop
}

function BackdropLayer(props: Props) {
  const { backdrop } = props;

  if (typeof backdrop === 'string') {
    return (
      <View style={[StyleSheet.absoluteFill, { backgroundColor: backdrop }]} />
    )
  }

  // TODO: add support for image backdrops
  return null;
}

export default BackdropLayer;
