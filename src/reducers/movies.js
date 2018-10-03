import * as types from '../actions/types';

const initialState = {
  movies: []
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POPULAR_MOVIES:
      return { ...state, movies: state.movies.concat(action.payload) };
    default:
    return state;
  }
};

export default MoviesReducer;
