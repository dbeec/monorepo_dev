import { create } from "zustand";

interface PreferencesState {
  openCompanyPreferencesModal: boolean;
  setOpenCompanyPreferencesModal: () => void;

  openDocumentTypePreferencesModal: boolean;
  setOpenDocumentTypePreferencesModal: () => void;

  openDepartmentsPreferencesModal: boolean;
  setOpenDepartmentsPreferencesModal: () => void;

  openCitiesPreferencesModal: boolean;
  setOpenCitiesPreferencesModal: () => void;
}

export const usePreferencesStore = create<PreferencesState>((set) => ({
  openCompanyPreferencesModal: false,
  openDocumentTypePreferencesModal: false,
  openDepartmentsPreferencesModal: false,
  openCitiesPreferencesModal: false,

  setOpenCompanyPreferencesModal: () =>
    set((state) => ({
      openCompanyPreferencesModal: !state.openCompanyPreferencesModal,
    })),

  setOpenDocumentTypePreferencesModal: () =>
    set((state) => ({
      openDocumentTypePreferencesModal: !state.openDocumentTypePreferencesModal,
    })),

  setOpenDepartmentsPreferencesModal: () =>
    set((state) => ({
      openDepartmentsPreferencesModal: !state.openDepartmentsPreferencesModal,
    })),

  setOpenCitiesPreferencesModal: () =>
    set((state) => ({
      openCitiesPreferencesModal: !state.openCitiesPreferencesModal,
    })),
}));
