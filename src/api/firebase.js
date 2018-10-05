import firebase from 'firebase';
import * as types from '../actions/types';
import { API_KEY } from '../utilities/constants';

var config = {
  apiKey: "AIzaSyBA5rC6MUqEPcrBlJbWdvaQeiym3LVuoTg",
  authDomain: "movies-visualizer.firebaseapp.com",
  databaseURL: "https://movies-visualizer.firebaseio.com",
  projectId: "movies-visualizer",
  storageBucket: "movies-visualizer.appspot.com",
  messagingSenderId: "958264710831"
};

const Firebase = firebase.initializeApp(config);
const database = Firebase.database();

export const saveMovie = ({ movie, dispatch }) => {
  const database = Firebase.database();
  return database
    .ref('/' + API_KEY)
    .child(movie.id)
    .set(movie, () =>
      dispatch({
        type: types.SET_SUCCESS,
        payload: movie.title + ' foi adicionado como favorito.'
      })
    );
};

export const getAllFavorites = dispatch => {
    const movies = database.ref(`/${API_KEY}`);
  movies.on('value', snapshot => {
    dispatch({
      type: types.SET_FAVORITES,
      payload: snapshot.val() === null ? [] : Object.values(snapshot.val())
    });
  });
};

export const removeMovie = ({ id, dispatch}) => {
  if (id != null) {
    return database
      .ref('/' + API_KEY)
      .child(id)
      .set(null, () => dispatch({
        type: types.SET_SUCCESS,
        payload: 'O filme foi removido dos favoritos!'
      }));
  }
  return false;
};

export default Firebase;
