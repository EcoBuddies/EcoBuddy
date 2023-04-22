import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { PetColorOption } from "../Screens/PetCreation";

import { theme } from "../theme";
import { PetColors } from "../data/types";

type Props = {
  color: PetColorOption;
  onPress: () => void;
};

const colorMap = {
  [PetColors.GREEN]: theme.colors.g2,
  [PetColors.YELLOW]: theme.colors.y1,
  [PetColors.ORANGE]: theme.colors.o2,
  [PetColors.BLUE]: theme.colors.blue,
  [PetColors.PINK]: theme.colors.pink,
};

const PetColorPicker = ({ color, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.btn, backgroundColor: colorMap[color.color] }}>
      <Text style={styles.text}>{color.idx}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 42,
    height: 42,
    backgroundColor: theme.colors.g2,
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: theme.colors.white,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
  },
});

export default PetColorPicker;
