import { create } from "zustand";

interface MovieStore {
  movies: any[];
  page: number;
  searchQuery: string;
  setMovies: (movies: any[]) => void;
  setPage: (page: number) => void;
  setSearchQuery: (query: string) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  page: 1,
  searchQuery: "",
  setMovies: (movies) => set({ movies }),
  setPage: (page) => set({ page }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));