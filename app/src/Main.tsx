import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/**
 * Screens
 */
import Home from "./Screens/Home";
import PetCreation from "./Screens/PetCreation";
import Scan from "./Screens/Scan";
import { useAppStore } from "./store/app-store";

export type MainStackParams = {
  PetCreation: undefined;
  Home: undefined;
  Scan: undefined;
};

const Stack = createNativeStackNavigator<MainStackParams>();

const Main = () => {
  const { petNotFound } = useAppStore();
  return (
    <Stack.Navigator>
      {petNotFound ? (
        <>
          <Stack.Screen name='Scan' component={Scan} />
          <Stack.Screen name='PetCreation' component={PetCreation} />
        </>
      ) : (
        <Stack.Screen name='Home' component={Home} />
      )}
    </Stack.Navigator>
  );
};

export default Main;
