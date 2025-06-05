// import axios from "axios";
import { Movie, TMDBMovie, TMDBResponse } from "@/types";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const mapTMDBMovieToMovie = (movie: TMDBMovie): Movie => ({
  id: movie.id,
  title: movie.title,
  overview: movie.overview,
  poster_path: movie.poster_path ?? '',
  backdrop_path: movie.backdrop_path ?? '',
  release_date: movie.release_date,
  vote_average: movie.vote_average,
  vote_count: movie.vote_count,
  adult: movie.adult,
  genre_ids: movie.genre_ids
});

export const fetchPopularMovies = async (page: number = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json() as TMDBResponse;
  return {
    movies: data.results.map(mapTMDBMovieToMovie),
    totalPages: data.total_pages,
  };
};

export const searchMovies = async (query: string, page: number = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  const data = await response.json() as TMDBResponse;
  return {
    movies: data.results.map(mapTMDBMovieToMovie),
    totalPages: data.total_pages,
  };
};