import { create } from "zustand";

const useOrderStore = create((set) => ({
  status: "pending",
  setStatus: (value) => set(() => ({ status: value })),
}));

export default useOrderStore;
