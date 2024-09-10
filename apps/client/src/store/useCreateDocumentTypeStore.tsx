import { create } from "zustand";

interface CreateCompanyState {
  openModalCreateDocumentType: boolean;
  setOpenModalCreateDocumentType: () => void;
}

export const useCreateDocumentTypeStore = create<CreateCompanyState>((set) => ({
  openModalCreateDocumentType: false,
  setOpenModalCreateDocumentType: () =>
    set((state) => ({
      openModalCreateDocumentType: !state.openModalCreateDocumentType,
    })),
}));
