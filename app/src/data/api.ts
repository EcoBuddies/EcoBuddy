import axios from "axios";
import { mutate } from "swr";
import useSWRImmutable from "swr/immutable";
import pako from "pako";
import { LABELS } from "../components/Trash";

const baseUrl = "https://fresh-plants-invite-188-230-129-16.loca.lt";

const petFetcher = (deviceId: string) => axios.post(`${baseUrl}/auth/me`, { deviceId }).then((res) => res.data);

const retryRequest = async (deviceId: string) => {
  const response = await axios.post(`${baseUrl}/carbon/scan`, { user: deviceId, img: "base64img_plastic" });
  const { ok, pet } = response.data;

  // refetch pet data & optimistically update
  if (pet) {
    await mutate(`${deviceId}`, pet);
  }

  return { ok };
};

export const usePet = (deviceId: string | null) => {
  const { data, error, isLoading, mutate } = useSWRImmutable(`${deviceId}`, petFetcher);

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

export interface IResponse {
  ok: boolean;
  label: LABELS | null;
}

export const sendImage = async (input: ScanInput): Promise<IResponse> => {
  try {
    const response = await axios.post(`${baseUrl}/carbon/scan`, { user: input.deviceId, img: input.scan });
    const { ok, pet, label } = response.data;
    await mutate(`${input.deviceId}`, pet);
    return { ok, label };
  } catch (error) {
    return { ok: false, label: null };
  }
};
