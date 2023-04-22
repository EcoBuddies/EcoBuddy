import { View, Text, Button } from "react-native";
import React from "react";
import { AuthStackParams } from ".";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<AuthStackParams, "ProfileCreation">;

const ProfileCreation = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ProfileCreation</Text>
      <Button title='Login' onPress={() => navigation.navigate("Login")}></Button>
    </View>
  );
};

export default ProfileCreation;
