import { create } from "zustand";

interface CreateCityState {
  openModalCreateCity: boolean;
  setOpenModalCreateCity: () => void;
}

export const useCreateCityStore = create<CreateCityState>((set) => ({
  openModalCreateCity: false,
  setOpenModalCreateCity: () =>
    set((state) => ({
      openModalCreateCity: !state.openModalCreateCity,
    })),
}));
