import * as types from './types';

export const getPopularMovies = page => {
  return {
    type: types.GET_POPULAR_MOVIES,
    payload: page
  };
};

export const getMovieDetails = id => {
  return {
    type: types.GET_MOVIE_DETAILS,
    payload: id
  };
};
