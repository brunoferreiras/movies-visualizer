import * as types from '../actions/types';
import * as API from '../api';
import { call, put, takeLatest } from 'redux-saga/effects';

function* popularMovies({ payload }) {
  try {
    const response = yield call(API.getPopularMovies, payload);
    yield put({ type: types.SET_POPULAR_MOVIES, payload: response.data.results });
  } catch (error) {
    console.log(error);
  }
}

function* MoviesSaga() {
  yield takeLatest(types.GET_POPULAR_MOVIES, popularMovies);
}

export default MoviesSaga;
