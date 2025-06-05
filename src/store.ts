import { create } from "zustand";
import { Movie } from "@/types";

interface MovieStore {
  movies: Movie[];
  page: number;
  totalPages: number;
  searchQuery: string;
  setMovies: (movies: Movie[]) => void;
  setPage: (page: number) => void;
  setTotalPages: (total: number) => void;
  setSearchQuery: (query: string) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  page: 1,
  totalPages: 1,
  searchQuery: "",
  setMovies: (movies) => set({ movies }),
  setPage: (page) => set({ page }),
  setTotalPages: (totalPages) => set({ totalPages }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));