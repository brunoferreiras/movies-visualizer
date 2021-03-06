import * as types from './types';

export const addFavorite = (movie, dispatch) => {
  return {
    type: types.ADD_FAVORITE,
    payload: {
      movie,
      dispatch
    }
  };
};

export const removeFavorite = (id, dispatch) => {
  return {
    type: types.REMOVE_FAVORITE,
    payload: {
      id,
      dispatch
    }
  };
};

export const listFavorites = dispatch => {
  return {
    type: types.LIST_FAVORITES,
    payload: dispatch
  };
};
