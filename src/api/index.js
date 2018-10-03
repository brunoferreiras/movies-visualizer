import axios from 'axios';
import { URL_POPULAR_MOVIES, URL_MOVIE_DETAILS, API_KEY, LANGUAGE } from '../utilities/constants';

export const getPopularMovies = (page) => {
  return axios.get(`${URL_POPULAR_MOVIES}&page=${page}`);
};

export const getMovieDetails = (id) => {
  const url = `${URL_MOVIE_DETAILS}${id}?api_key=${API_KEY}&language=${LANGUAGE}`;
  return axios.get(url);
}
