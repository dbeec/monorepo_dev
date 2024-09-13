import { create } from "zustand";

interface CreateCompanyState {
  openModalCreateDepartment: boolean;
  setOpenModalCreateDepartment: () => void;
}

export const useCreateDepartmentStore = create<CreateCompanyState>((set) => ({
  openModalCreateDepartment: false,
  setOpenModalCreateDepartment: () =>
    set((state) => ({
      openModalCreateDepartment: !state.openModalCreateDepartment,
    })),
}));
