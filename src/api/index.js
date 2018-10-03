import axios from 'axios';
import { URL_POPULAR_MOVIES } from '../utilities/constants';

export const getPopularMovies = (page) => {
  return axios.get(`${URL_POPULAR_MOVIES}&page=${page}`);
};
