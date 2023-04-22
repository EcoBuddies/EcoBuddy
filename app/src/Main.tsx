import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/**
 * Screens
 */
import Home from "./Screens/Home";
import Auth from "./Screens/Auth";

export type MainStackParams = {
  Auth: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<MainStackParams>();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Auth' component={Auth} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
};

export default Main;
