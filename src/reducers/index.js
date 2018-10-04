import { combineReducers } from 'redux';
import MoviesReducer from './movies';
import GeneralReducer from './general';
import FavoriteReducer from './favorites';

export default combineReducers({
  movies: MoviesReducer,
  general: GeneralReducer,
  favorites: FavoriteReducer
});
