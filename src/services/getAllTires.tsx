import { TiresParams } from "../types/paramsTiresInterface";
import { api } from "./apiClient";

export const getAllTires = async (params: TiresParams = {}) => {
  const defaultParams = {
    pageSize: params.pageSize || 10,
    pageNumber: params.pageNumber || 0,
    branchOfficesId: 215,
  };

  try {
    const response = await api.get("/tires", {
      params: {
        ...defaultParams,
        ...params,
      },
    });

    return {
      content: response.data.content || [],
      pageSize: response.data.pageSize || 10,
      pageNumber: response.data.pageNumber || 0,
      numberOfElements: response.data.numberOfElements || 0,
      lastPage: response.data.lastPage || true, 
      empty: response.data.empty || false,
    };
  } catch (error) {
    console.error("Erro ao buscar pneus:", error);
    throw error;
  }
};
