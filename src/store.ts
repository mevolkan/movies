import { create } from "zustand";

export const useMovieStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (q: string) => set({ searchQuery: q }),
}));
