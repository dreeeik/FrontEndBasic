import { api } from "./apiClient";

export const getTiresById = async (id: number) => {
  try {
    const response = await api.get(`/tires/${id}`, {
      params: {
        id,
      },
    });
    return response.data;
  } catch (e) {
    console.error("Nao foi possivel encontrar o pneu desejado", e);
  }
};
