import * as types from './types';

export const setError = (error = null) => {
  return {
    type: types.SET_ERROR,
    payload: error
  };
};


export const setSuccess = (message = null) => {
  return {
    type: types.SET_SUCCESS,
    payload: message
  };
};
