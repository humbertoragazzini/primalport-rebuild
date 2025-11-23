import { create } from "zustand";

export const useActions = create((set) => ({
  menu: false,
  setMenuToggle: (open: boolean) => set({ menu: !open }),
}));
