import { create } from "zustand";

interface CreateDocumentTypeState {
  openModalCreateDocumentType: boolean;
  setOpenModalCreateDocumentType: () => void;
}

export const useCreateDocumentTypeStore = create<CreateDocumentTypeState>(
  (set) => ({
    openModalCreateDocumentType: false,
    setOpenModalCreateDocumentType: () =>
      set((state) => ({
        openModalCreateDocumentType: !state.openModalCreateDocumentType,
      })),
  })
);
