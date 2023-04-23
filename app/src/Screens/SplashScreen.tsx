import { View, Image, StyleSheet } from 'react-native';
import React from 'react'
import { theme } from '../theme';

const GIF_ANIMATION = require('app/assets/Green-boi_Login.gif')

const SplashScreen = () => {

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.g1 }]}>
      <Image source={GIF_ANIMATION} resizeMode="contain" style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '80%',
    height: '80%',
  },
});

export default SplashScreen