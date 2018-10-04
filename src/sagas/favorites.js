import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import { saveMovie, removeMovie, getAllFavorites } from '../api/firebase';

function* addFavorite({ payload }) {
  try {
    console.log('SAGA ADD FAVORITE', payload);
    const response = yield call(saveMovie, payload);
    // yield put({
    //   type: types.SET_POPULAR_MOVIES,
    //   payload: response.data.results
    // });
  } catch (error) {
    console.log('saga:', error);
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

function* listFavorites({ payload }) {
  try {
    const response = yield call(getAllFavorites, payload);
    console.log('LIST FAVORITES', response);
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
