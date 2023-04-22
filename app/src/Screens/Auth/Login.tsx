import { View, Text, Button } from "react-native";
import React from "react";
import { AuthStackParams } from ".";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<AuthStackParams, "Login">;

const Login = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <Button title='ProfileCreation' onPress={() => navigation.navigate("ProfileCreation")}></Button>
    </View>
  );
};

export default Login;
