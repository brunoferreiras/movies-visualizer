import { combineReducers } from 'redux';
import MoviesReducer from './movies';
import GeneralReducer from './general';

export default combineReducers({
  movies: MoviesReducer,
  general: GeneralReducer
});
