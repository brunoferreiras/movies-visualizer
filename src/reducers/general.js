import * as types from '../actions/types';

const initialState = {
  error: null
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default GeneralReducer;
