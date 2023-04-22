import React from "react";
import Main from "./src/Main";
import { NavigationContainer } from "@react-navigation/native";
import { AppStore } from "./src/store/app-store";

export default function App() {
  return (
    <AppStore>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </AppStore>
  );
}
