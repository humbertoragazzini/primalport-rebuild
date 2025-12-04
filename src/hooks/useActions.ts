import { create } from "zustand";

type ActionsStore = {
  menu: boolean;
  setMenuToggle: (open: boolean) => void;
  card: string;
  setCard: (value: string) => void;
};

export const useActions = create<ActionsStore>((set) => ({
  menu: false,
  setMenuToggle: (open) => set({ menu: !open }),
  card: "",
  setCard: (value) => set({ card: value }),
}));
