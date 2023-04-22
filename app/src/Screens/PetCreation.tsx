import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import Background from "../components/Background";
import { theme } from "../theme";
import { PetColors } from "../data/types";
import PetColorPicker from "../components/PetColorPicker";
import Pet from "../components/Pet";
import { useAppStore } from "../store/app-store";
import { createNewPet } from "../data/api";
import { MainStackParams } from "../Main";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<MainStackParams, "PetCreation">;

export type PetColorOption = {
  idx: number;
  color: PetColors;
};

const PetColorOptions: PetColorOption[] = [
  {
    idx: 1,
    color: PetColors.GREEN,
  },
  {
    idx: 2,
    color: PetColors.YELLOW,
  },
  {
    idx: 3,
    color: PetColors.ORANGE,
  },
  {
    idx: 4,
    color: PetColors.BLUE,
  },
  {
    idx: 5,
    color: PetColors.PINK,
  },
];

const PetCreation = ({ navigation }: Props) => {
  const [color, setColor] = useState<PetColors>(PetColors.GREEN);
  const [name, setName] = useState("");
  const { deviceId, createPet } = useAppStore();

  const onSubmit = async () => {
    const ok = await createPet({ name, color });

    if (ok) {
      navigation.navigate("Home");
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Customize your character</Text>
        <View style={styles.formWrapper}>
          <View style={styles.pet}>
            <Pet color={color} />
          </View>
          <Text style={styles.subtitle}>Select color</Text>
          <View style={styles.colorVariants}>
            {PetColorOptions.map((option) => (
              <PetColorPicker key={option.idx} color={option} onPress={() => setColor(option.color)} />
            ))}
          </View>
          <Text style={styles.subtitle}>Select name</Text>
          <TextInput style={styles.input} onChangeText={setName} value={name} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 18,
    paddingVertical: 18,
  },
  formWrapper: {
    backgroundColor: theme.colors.white,
    borderRadius: 30,
    width: "90%",
    alignItems: "center",
    gap: 16,
    paddingVertical: 10,
  },
  colorVariants: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "space-evenly",
    width: "100%",
    paddingHorizontal: 5,
    paddingBottom: 15,
  },
  pet: {
    minHeight: 250,
  },
  title: {
    color: theme.colors.white,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
  },
  subtitle: {
    color: theme.colors.b1,
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "500",
    textAlign: "left",
    width: "90%",
    marginTop: 20,
  },
  button: {
    backgroundColor: theme.colors.o2,
    borderRadius: 44,
    paddingHorizontal: 28,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    lineHeight: 16,
    fontWeight: "600",
  },
  input: {
    height: 60,
    padding: 15,
    width: "90%",
    borderRadius: 44,
    backgroundColor: theme.colors.gray,
    fontSize: 18,
  },
});

export default PetCreation;
