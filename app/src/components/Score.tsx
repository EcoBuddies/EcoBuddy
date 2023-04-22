import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { theme } from "../theme";

const Star = () => (
  <Svg width={30} height={29} viewBox='0 0 30 29' fill='none'>
    <Path
      d='M14.093.953a1 1 0 011.814 0l3.675 7.913a1 1 0 00.787.572l8.661 1.05a1 1 0 01.56 1.725l-6.39 5.94a1 1 0 00-.3.925l1.678 8.562a1 1 0 01-1.467 1.066l-7.625-4.241a1 1 0 00-.972 0l-7.625 4.241a1 1 0 01-1.467-1.066L7.1 19.078a1 1 0 00-.3-.925l-6.39-5.94a1 1 0 01.56-1.725l8.661-1.05a1 1 0 00.787-.572L14.093.953z'
      fill='#fff'
    />
  </Svg>
);

interface Props {
  score?: number;
}

const Score = ({ score = 0 }: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.yellowEllipsis}>
        <Star />
      </View>
      <View style={styles.scoreBg}>
        <Text style={styles.scoreText}>{score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 0,
    alignItems: "center",
  },
  yellowEllipsis: {
    backgroundColor: theme.colors.y1,
    width: 50,
    height: 50,
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
    marginRight: -5,
    zIndex: 2,
  },
  scoreBg: {
    backgroundColor: theme.colors.gray,
    padding: 10,
    paddingRight: 15,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 1,
  },
  scoreText: {
    color: theme.colors.b1,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "500",
  },
});

export default Score;
