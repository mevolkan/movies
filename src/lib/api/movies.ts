// import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// export const fetchPopularMovies = async (page = 1) => {
//   const { data } = await axios.get(`${BASE_URL}/movie/popular`, {
//     params: { api_key: API_KEY, page }
//   });
//   return data.results;
// };

// export const searchMovies = async (query: string) => {
//   const { data } = await axios.get(`${BASE_URL}/search/movie`, {
//     params: { api_key: API_KEY, query }
//   });
//   return data.results;
// };

export const fetchPopularMovies = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();
  return {
    movies: data.results,
    totalPages: data.total_pages
  };
};

export const searchMovies = async (query: string, page: number) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  const data = await response.json();
  return {
    movies: data.results,
    totalPages: data.total_pages
  };
};