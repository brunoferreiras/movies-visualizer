import axios from 'axios';
import { API_KEY, LANGUAGE, URL_MOVIE_DETAILS, URL_POPULAR_MOVIES, URL_SEARCH_MOVIE } from '../utilities/constants';

export const getPopularMovies = page => {
  return axios.get(`${URL_POPULAR_MOVIES}&page=${page}`);
};

export const getMovieDetails = id => {
  const url = `${URL_MOVIE_DETAILS}${id}?api_key=${API_KEY}&language=${LANGUAGE}`;
  return axios.get(url);
};

export const searchMovie = word => {
  const url = `${URL_SEARCH_MOVIE}${word}`;
  return axios.get(url);
};
