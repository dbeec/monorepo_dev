import { create } from "zustand";

interface SidebarState {
  expanded: string | false;
  setExpanded: (panel: string | false) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  expanded: false,
  setExpanded: (panel: string | false) => set(() => ({ expanded: panel })),
}));
