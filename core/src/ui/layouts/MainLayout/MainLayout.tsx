import React from 'react';
import { useWindowDimensions } from 'react-native';
import MainPhoneLayout from './MainLayout.phone';
import MainTabletLayout from './MainLayout.tablet';


function MainLayout(props) {
  const { width } = useWindowDimensions();

  if (width > 600) {
    return (<MainTabletLayout {...props} />)
  }

  return (<MainPhoneLayout {...props} />);
}

export default MainLayout;
