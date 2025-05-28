import { create } from "zustand";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface MovieStore {
  movies: Movie[];
  page: number;
  searchQuery: string;
  setMovies: (movies: Movie[]) => void;
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