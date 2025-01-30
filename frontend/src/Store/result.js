import { create } from "zustand";

export const useResultStore = create((set) => ({
  Results: [],
  setResult: (Results) => set({ Results }),
  
  fetchResult: async () => {
    try {
      const res = await fetch("/api/technician/equipment");
      const data = await res.json();
      set({ Results: data.data });
    } catch (error) {
      console.error("Error fetching Results", error.message);
    }
  },  
}));
