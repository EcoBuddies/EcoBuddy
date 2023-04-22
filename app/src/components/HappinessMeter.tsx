import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Defs, Path, RadialGradient, Stop, Svg } from "react-native-svg";
import { theme } from "../theme";

const Heart = () => (
  <Svg width={32} height={29} viewBox='0 0 32 29' fill='none'>
    <Path
      d='M31.298 14.35a17.708 17.708 0 01-1.404 3.242C27.502 21.921 23 26.16 16.038 29 2.01 23.34-2.077 11.991.93 5.597a9.691 9.691 0 013.385-3.933c3.128-2.093 7.293-2.27 10.237-.021.52.396 1.002.87 1.434 1.42 3.952-5.086 12.204-3.55 15.065 2.475 1.148 2.415 1.282 5.545.245 8.813h.001z'
      fill='url(#paint0_radial_531_565)'
    />
    <Defs>
      <RadialGradient
        id='paint0_radial_531_565'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='matrix(-17.60004 23.36113 -25.90786 -19.51872 30.4 -.806)'>
        <Stop stopColor='#FEC868' />
        <Stop offset={1} stopColor='#F27157' />
      </RadialGradient>
    </Defs>
  </Svg>
);

interface Props {
  happiness?: number;
}

const HappinessMeter = ({ happiness = 0 }: Props) => {
  const getWidth = (happiness: number) => {
    const h = happiness + 10;
    return `${h}%`;
  };
  return (
    <View style={styles.row}>
      <View style={styles.whiteEllipsis}>
        <Heart />
      </View>
      <View style={styles.scoreBg}>
        <Text style={styles.scoreText}>{happiness} / 100</Text>
        <View style={{ ...styles.scoreShadow, width: getWidth(happiness) }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 0,
    alignItems: "center",
    width: "80%",
    alignSelf: "flex-start",
    marginHorizontal: 15,
  },
  whiteEllipsis: {
    backgroundColor: theme.colors.white,
    width: 50,
    height: 50,
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
    marginRight: -10,
    zIndex: 2,
  },
  scoreBg: {
    backgroundColor: theme.colors.gray,
    padding: 5,
    paddingRight: 15,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 1,
    width: "100%",
    position: "relative",
  },
  scoreShadow: {
    backgroundColor: theme.colors.o3,
    padding: 5,
    paddingRight: 15,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scoreText: {
    color: theme.colors.b1,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "500",
    textAlign: "center",
    zIndex: 2,
  },
});

export default HappinessMeter;
