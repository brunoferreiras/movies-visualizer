import * as types from '../actions/types';

const initialState = {
  movies: [],
  movieDetails: {}
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POPULAR_MOVIES:
      return { ...state, movies: state.movies.concat(action.payload) };
    case types.SET_MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload };
    default:
      return state;
  }
};

export default MoviesReducer;
