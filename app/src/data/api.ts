import axios from "axios";
import useSWR from "swr";

const baseUrl = "http://localhost:3000";

const petFetcher = (deviceId: string) => axios.post(`${baseUrl}/auth/me`, { deviceId }).then((res) => res.data);

export const usePet = (deviceId: string | null) => {
  const { data, error, isLoading, mutate } = useSWR(deviceId, petFetcher);

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
