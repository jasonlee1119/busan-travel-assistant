import { create } from "zustand";
import type { AlertData } from "../types/commonTypes";

interface GlobalState{
  alertQueue: AlertData[];
}

interface GlobalActions{
  addAlert: (alert: AlertData) => void;
  removeAlert: (id: number) => void;
}

export const useGlobalStore = create<GlobalState & GlobalActions>((set) => ({
  alertQueue: [] as AlertData[],
  addAlert: (alert) => set((state) => ({ alertQueue: [...state.alertQueue, alert] })),
  removeAlert: (id) => set((state) => ({ alertQueue: state.alertQueue.filter(alert => alert.id !== id) })),
}));