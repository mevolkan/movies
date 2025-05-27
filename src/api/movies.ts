import axios from "axios";

const API_KEY = 'TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async (page = 1) => {
  const res = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY, page },
  });
  return res.data;
};

export const searchMovies = async (query: string) => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query },
  });
  return res.data;
};
