import { create } from "zustand";

const useProductStore = create((set) => ({
  userType: "",
  category: "",
  searchWord: "",
  setCategory: (value) => set(() => ({ category: value })),
  setUserType: (value) => set(() => ({ userType: value })),
  setSearch: (value) => set(() => ({ searchWord: value })),
}));

export default useProductStore;
