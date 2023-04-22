import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import loadingAnimation from './cameleon-loading.json';

const LoadingAnimation = () => {
  return (
    <View style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <LottieView
        source={loadingAnimation}
        autoPlay
        loop
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
};

export default LoadingAnimation;