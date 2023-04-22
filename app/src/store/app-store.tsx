import React, { createContext, useContext } from "react";
import useDeviceUuid from "../hooks/useDeviceUuid";
import { createNewPet, usePet } from "../data/api";
import { PetColors } from "../data/types";

interface MyContextType {
  deviceId: string;
  petNotFound: boolean;
  createPet: (input: { name: string; color: PetColors }) => Promise<boolean>;
}

const AppContext = createContext<MyContextType>({
  deviceId: "",
  petNotFound: true,
  createPet: () => new Promise<boolean>((resolve) => resolve(false)),
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

  if (isLoading) {
    // console.warn("loading");
    return null;
  }

  return <AppContext.Provider value={{ deviceId, petNotFound, createPet }}>{children}</AppContext.Provider>;
};

export { AppStore, useAppStore };
