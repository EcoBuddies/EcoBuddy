import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/**
 * Screens
 */
import Home from "./Screens/Home";
import PetCreation from "./Screens/PetCreation";
import Scan from "./Screens/Scan";
import SplashScreen from "./Screens/SplashScreen";
import { useAppStore } from "./store/app-store";
import { theme } from "./theme";

export type MainStackParams = {
  PetCreation: undefined;
  Home: undefined;
  Scan: undefined;
  SplashScreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParams>();

const Main = () => {
  const { petNotFound } = useAppStore();
  const [loadingSplashScreen, setloadingSplashScreen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setloadingSplashScreen(false);
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Stack.Navigator>
      {petNotFound ? (
        <Stack.Screen name='PetCreation'
          component={PetCreation}
          options={{ headerStyle: { backgroundColor: theme.colors.g1 }, headerTintColor: "#fff", headerTitle: "" }}
        />
      ) : (
        <>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerStyle: { backgroundColor: theme.colors.g1 }, headerTintColor: "#fff", headerTitle: "" }}
          />
          <Stack.Screen name='Scan' component={Scan} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Main;
