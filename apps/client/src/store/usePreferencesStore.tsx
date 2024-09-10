import { create } from "zustand";

interface PreferencesState {
  openPreferencesModal: boolean;
  setOpenPreferencesModal: () => void;
}

export const usePreferencesStore = create<PreferencesState>((set) => ({
  openPreferencesModal: false,
  setOpenPreferencesModal: () =>
    set((state) => ({ openPreferencesModal: !state.openPreferencesModal })),
}));
