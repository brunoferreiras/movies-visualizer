import * as types from '../actions/types';

const initialState = {
  movies: [],
};

const FavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FAVORITES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default FavoritesReducer;
