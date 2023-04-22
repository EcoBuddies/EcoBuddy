import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { theme } from "../theme";

const CameraIcon = () => (
  <Svg width={36} height={27} viewBox='0 0 36 27' fill='none'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.832.494C12.072.186 12.455 0 12.86 0h10.28c.405 0 .787.179 1.027.494l3.472 4.415h4.5c1.02 0 2.001.387 2.729 1.08A3.606 3.606 0 0136 8.595v14.72a3.6 3.6 0 01-1.132 2.605A3.96 3.96 0 0132.138 27H3.862a3.955 3.955 0 01-2.73-1.08A3.606 3.606 0 010 23.314V8.587a3.6 3.6 0 011.132-2.604 3.96 3.96 0 012.73-1.081H8.36L11.832.494zm12.5 14.748c0 3.335-2.834 6.04-6.328 6.04-3.495 0-6.329-2.705-6.329-6.04 0-3.334 2.834-6.04 6.329-6.04 3.494 0 6.328 2.706 6.328 6.04z'
      fill='#39393B'
    />
  </Svg>
);

interface Props {
  onPress: () => void;
}

const CameraBtn = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <CameraIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray,
    padding: 20,
    borderRadius: 500,
    marginTop: 15,
  },
});

export default CameraBtn;
