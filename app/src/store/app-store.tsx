import React, { createContext, useContext } from "react";
import useDeviceUuid from "../hooks/useDeviceUuid";
import { IResponse, createNewPet, sendImage as sendImageApi, usePet } from "../data/api";
import { IPet, PetColors } from "../data/types";
import { ActivityIndicator } from "react-native";
import { theme } from "../theme";
import SplashScreen from "../Screens/SplashScreen";

interface MyContextType {
  pet?: { data: IPet };
  deviceId: string;
  petNotFound: boolean;
  createPet: (input: { name: string; color: PetColors }) => Promise<boolean>;
  sendImage: (input: { image: string }) => Promise<IResponse | false>;
}

const AppContext = createContext<MyContextType>({
  deviceId: "",
  petNotFound: true,
  createPet: () => new Promise<boolean>((resolve) => resolve(false)),
  sendImage: () => new Promise<IResponse | false>((resolve) => resolve(false)),
});

const useAppStore = () => useContext(AppContext);

const AppStore = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  const { deviceId } = useDeviceUuid();
  const { data: pet, isLoading, isError: petNotFound, refetch: refetchPet } = usePet(deviceId);

  const createPet = async (input: { color: PetColors; name: string }) => {
    const { color, name } = input;
    const { ok } = await createNewPet({
      color,
      name,
      user: deviceId,
    });
    await refetchPet();

    return ok;
  };

  const sendImage = async (input: { image: string }) => {
    const { ok, label } = await sendImageApi({
      deviceId,
      scan: input.image,
    });

    await refetchPet();

    return { ok, label };
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AppContext.Provider value={{ deviceId, petNotFound, createPet, pet, sendImage }}>{children}</AppContext.Provider>
  );
};

export { AppStore, useAppStore };
