import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import ProfileCreation from "./ProfileCreation";

export type AuthStackParams = {
  Login: undefined;
  ProfileCreation: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='ProfileCreation' component={ProfileCreation} />
    </Stack.Navigator>
  );
};

export default Auth;
