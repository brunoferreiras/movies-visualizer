import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import Firebase, { saveMovie, removeMovie, getAllFavorites } from '../api/firebase';
import { API_KEY } from '../utilities/constants';

function* addFavorite({ payload }) {
  try {
    yield call(saveMovie, payload);
  } catch (error) {
    yield put({ type: types.SET_ERROR, payload: error.message });
  }
}

function* removeFavorite({ payload }) {
  try {
    const response = yield call(removeMovie, payload);
    console.log('REMOVE FAVORITE', response);
    // yield put({
    //   type: types.SET_MOVIE_DETAILS,
    //   payload: response.data
    // });
  } catch (error) {
    yield put({ type: types.SET_ERROR, payload: error.message });
  }
}

function* listFavorites() {
  try {
    var moviesRef = Firebase.database().ref(`${API_KEY}`)
    var movies = yield call(function() {
      return new Promise(function(resolve, reject) {
        moviesRef.once('value', function (snap) {
          var movies = []
          var movieskeys = snap.val()
          for (var movieskey in movieskeys) {
            Firebase.database().ref(`${API_KEY}/${movieskey}`).once('value', function (item) {
              movies.push(item.val())
            })
          }
          resolve(movies)
        })
      })
    })
    console.log(movies)
    // yield put({type: 'LOAD_ROOMS', payload: { rooms: rooms}})

    // const snapshot = yield call(getAllFavorites);
    // console.log('snapshot', snapshot);
    // if (snapshot.val() === true) {
    //   console.log('LIST FAVORITES', snapshot.val());
    // }
    // yield put({
    //   type: types.SET_SEARCH_MOVIES,
    //   payload: response.data.results
    // });
  } catch (error) {
    yield put({ type: types.SET_ERROR, payload: error.message });
  }
}

function* FavoritesSaga() {
  yield takeLatest(types.ADD_FAVORITE, addFavorite);
  yield takeLatest(types.REMOVE_FAVORITE, removeFavorite);
  yield takeLatest(types.LIST_FAVORITES, listFavorites);
}

export default FavoritesSaga;
