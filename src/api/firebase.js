import firebase from 'firebase';
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

export const saveMovie = (movie, callback) => {
  const database = Firebase.database();
  return database
    .ref('/' + API_KEY)
    .child(movie.id)
    .set(movie, () => console.log('Save Movie!'));
};

export const getAllFavorites = () => {
  return new Promise(resolve => {
  const database = Firebase.database();
    const movies = database.ref(`/${API_KEY}`);
    resolve(movies.on(
      'value',
      snapshot => {
    console.log('read: ', snapshot.val());
    return snapshot.val();
      })
    );
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
