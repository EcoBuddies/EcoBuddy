import React, { createContext, useContext } from "react";
import useDeviceUuid from "../hooks/useDeviceUuid";
import { usePet } from "../data/api";

interface MyContextType {
  deviceId: string;
  petNotFound: boolean;
}

const AppContext = createContext<MyContextType>({
  deviceId: "",
  petNotFound: true,
});

const useAppStore = () => useContext(AppContext);

const AppStore = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  const { deviceId } = useDeviceUuid();
  const { data: pet, isLoading, isError: petNotFound } = usePet(deviceId);

  if (isLoading) {
    console.warn("loading");
    return null;
  }

  return <AppContext.Provider value={{ deviceId, petNotFound }}>{children}</AppContext.Provider>;
};

export { AppStore, useAppStore };
