import axios from "axios";
import useSWR from "swr";
import useSWRImmutable from 'swr/immutable'

const baseUrl = "https://tough-bottles-post-88-200-36-60.loca.lt/";

const petFetcher = (deviceId: string) => axios.post(`${baseUrl}/auth/me`, { deviceId }).then((res) => res.data);

export const usePet = (deviceId: string | null) => {
  const { data, error, isLoading, mutate } = useSWRImmutable(deviceId, petFetcher);

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
