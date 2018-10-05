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
    yield call(removeMovie, payload);
  } catch (error) {
    yield put({ type: types.SET_ERROR, payload: error.message });
  }
}

function* listFavorites({ payload }) {
  try {
    yield call(getAllFavorites, payload);
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
