import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async (page = 1) => {
  const { data } = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY, page }
  });
  return data.results;
};

export const searchMovies = async (query: string) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query }
  });
  return data.results;
};