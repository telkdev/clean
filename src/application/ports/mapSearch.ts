/* eslint-disable no-unused-vars */
import { State, City, County } from "@/domain/searchItem";

export interface MapSearchService {
  getStates(quantity: number): Promise<State[]>;
  getCities(stateId: number, quantity: number): Promise<City[]>;
  getCounties(stateId: number, quantity: number): Promise<County[]>;
}
