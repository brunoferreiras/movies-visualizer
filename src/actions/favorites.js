import * as types from './types';

export const addFavorite = movie => {
  return {
    type: types.ADD_FAVORITE,
    payload: movie
  };
};

export const removeFavorite = movie => {
  return {
    type: types.REMOVE_FAVORITE,
    payload: movie
  };
};

export const listFavorites = () => {
  return {
    type: types.LIST_FAVORITES,
    payload: ''
  };
};
