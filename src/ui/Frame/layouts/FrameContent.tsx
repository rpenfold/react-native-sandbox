import React from 'react';
import VerticalFrameContent from './VerticalFrameContent';
import HorizontalFrameContent from './HorizontalFrameContent';

export default function FrameContent(props) {
  const { layout, ...rest  } = props;

  if (layout === 'vertical') {
    return <VerticalFrameContent {...rest} />;
  }

  return <HorizontalFrameContent {...rest} />;
}
