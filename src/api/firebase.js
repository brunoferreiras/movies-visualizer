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

export const saveMovie = (movie) => {
  const database = Firebase.database();
  database.ref('/' + API_KEY).child(this.state.id).set(movie, () => console.log('Save Movie!'));
}

export const readMovie = (id) => {
  const database = Firebase.database();
  var movie = database.ref(`/${API_KEY}/${id}`);
  return movie.on('value', function(snapshot) {
    console.log('read: ', snapshot.val());
    return snapshot.val();
  });
}

export const removeMovie = (id) => {
  if (id != null) {
    database.ref('/' + API_KEY).child(id).set(null, () => console.log('Remove Movie'));
  }
}

export default Firebase;
