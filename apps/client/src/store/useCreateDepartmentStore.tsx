import { create } from "zustand";

interface CreateDepartmentState {
  openModalCreateDepartment: boolean;
  setOpenModalCreateDepartment: () => void;
}

export const useCreateDepartmentStore = create<CreateDepartmentState>(
  (set) => ({
    openModalCreateDepartment: false,
    setOpenModalCreateDepartment: () =>
      set((state) => ({
        openModalCreateDepartment: !state.openModalCreateDepartment,
      })),
  })
);
