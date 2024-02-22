import { create } from "zustand";
import { getUserInfo, userHasProducts } from "api/users";

const useAuthStore = create((set) => ({
  isAuthenticated: localStorage.getItem("token") !== null ? true : false,
  userInitials: {
    firstName: "",
    lastName: "",
    user_id: "",
  },
  hasProducts: 0,

  loadInitials: async () => {
    const { firstName, lastName, _id } = await getUserInfo();
    set({
      userInitials: {
        firstName,
        lastName,
        user_id: _id,
      },
    });
    console.log("I'm in store", firstName, lastName);
  },

  productsNumber: async () => {
    const { numberOfProducts } = await userHasProducts();
    set({ hasProducts: numberOfProducts });
  },

  logoutUser: () => {
    localStorage.removeItem("token");
    set({ userInitials: {} });
  },
}));

export default useAuthStore;
