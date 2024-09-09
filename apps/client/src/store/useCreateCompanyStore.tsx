import { create } from "zustand";

interface CreateCompanyState {
  openModalCreateCompany: boolean;
  setOpenModalCreateCompany: () => void;
}

export const useCreateCompanyStore = create<CreateCompanyState>((set) => ({
  openModalCreateCompany: false,
  setOpenModalCreateCompany: () =>
    set((state) => ({
      openModalCreateCompany: !state.setOpenModalCreateCompany,
    })),
}));
