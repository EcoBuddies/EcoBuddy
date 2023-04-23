import axios from "axios";
import useSWR, { mutate } from "swr";

const baseUrl = "https://some-corners-sell-88-200-36-60.loca.lt";

const petFetcher = (deviceId: string) => axios.post(`${baseUrl}/auth/me`, { deviceId }).then((res) => res.data);

export const usePet = (deviceId: string | null) => {
  const { data, error, isLoading, mutate } = useSWR(`${deviceId}`, petFetcher);

  return {
    data,
    isError: error,
    isLoading,
    refetch: mutate,
  };
};

interface CreateNewPetInput {
  color: string;
  name: string;
  user: string;
}

export const createNewPet = async (input: CreateNewPetInput) => {
  try {
    const response = await axios.post(`${baseUrl}/pet/create`, { pet: input });
    const { ok } = response.data;
    return { ok };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return { ok: false };
  }
};

interface ScanInput {
  deviceId: string;
  scan: string;
}

export const sendImage = async (input: ScanInput) => {
  try {
    const response = await axios.post(`${baseUrl}/carbon/scan`, { user: input.deviceId, img: input.scan });
    const { ok, pet } = response.data;
    // refetch pet data & optimistically update
    await mutate(`${input.deviceId}`, pet);
    return { ok };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return { ok: false };
  }
};
