import { create } from "zustand"
import { SomeStore } from "./type"

export const useStore = create<SomeStore>(set => ({
  data: 0,
  getData: () => set((state) => ({ data: state.data + 1 })),
  removeData: () => set({ data: 0 }),
}))