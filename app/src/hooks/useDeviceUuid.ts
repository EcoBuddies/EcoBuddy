import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuidV4 from "react-native-uuid";

const DEVICE_UUID_KEY = "DEVICE_UUID_KEY";

const useDeviceUuid = () => {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  useEffect(() => {
    const onInit = async () => {
      let uuid = await AsyncStorage.getItem(DEVICE_UUID_KEY);
      if (!uuid) {
        uuid = uuidV4.v4() as string;
      }
      setDeviceId(uuid);
    };
    onInit();
  }, []);

  return {
    deviceId: deviceId || "",
    setDeviceId,
  };
};

export default useDeviceUuid;
