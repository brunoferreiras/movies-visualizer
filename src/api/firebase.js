import firebase from 'firebase';
import * as types from '../actions/types';
import { API_KEY } from '../utilities/constants';

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
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
      payload: snapshot.val()
    });
  });
};

export const removeMovie = id => {
  if (id != null) {
    return database
      .ref('/' + API_KEY)
      .child(id)
      .set(null, () => console.log('Remove Movie'));
  }
  return false;
};

export default Firebase;
