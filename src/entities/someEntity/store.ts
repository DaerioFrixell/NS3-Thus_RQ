import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import { SomeStore } from "./type";
import { baseUrl, endpointInfo } from "../../shared/api/someApi";
import axios from "axios";


export const useStore = create<SomeStore>()(devtools(set => ({
  isStoreLoading: false,
  data: null,
  error: null,

  getData: async () => {
    set({ isStoreLoading: true });

    try {
      const res = await axios.get(baseUrl + endpointInfo);

      set(state => ({
        ...state,
        data: res.data
      }));
    } catch {
      set(state => ({
        ...state,
        error: "error with getData"
      }));
    } finally {
      set({ isStoreLoading: false });
    }
  },

  removeData: () => set({ data: null }),
})));