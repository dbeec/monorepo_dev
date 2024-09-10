import { create } from "zustand";

interface PreferencesState {
  openCompanyPreferencesModal: boolean;
  setOpenCompanyPreferencesModal: () => void;

  openDocumentTypePreferencesModal: boolean;
  setOpenDocumentTypePreferencesModal: () => void;
}

export const usePreferencesStore = create<PreferencesState>((set) => ({
  openCompanyPreferencesModal: false,
  openDocumentTypePreferencesModal: false,

  setOpenCompanyPreferencesModal: () =>
    set((state) => ({
      openCompanyPreferencesModal: !state.openCompanyPreferencesModal,
    })),

  setOpenDocumentTypePreferencesModal: () =>
    set((state) => ({
      openDocumentTypePreferencesModal: !state.openDocumentTypePreferencesModal,
    })),
}));
