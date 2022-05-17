import { MapSearchService } from "@/application/ports/mapSearch";
import { State, City, County } from "@/domain/searchItem";
import { useApi } from "@/services/apiAdapterVue";

export function useMapSearch(): MapSearchService {
  const { query } = useApi();

  return {
    async getStates(quantity: number): Promise<State[]> {
      const { data } = await query("/api/States/GetStates", { quantity });

      return data as State[];
    },
    async getCities(stateId: number, quantity: number): Promise<City[]> {
      const { data } = await query("/api/Cities/GetCities", {
        stateId,
        quantity,
      });

      return data as City[];
    },
    async getCounties(stateId: number, quantity: number): Promise<County[]> {
      const { data } = await query("/api/Counties/GetCounties", {
        stateId,
        quantity,
      });

      return data as County[];
    },
  };
}
