import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../theme";

interface BackgroundProps {
  children: React.ReactNode | React.ReactNode[];
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <LinearGradient style={styles.container} colors={[theme.colors.g1, theme.colors.g2, theme.colors.g3]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Background;
