import { call, put, takeLatest } from 'redux-saga/effects';
import { delay} from 'redux-saga';
import * as types from '../actions/types';
import * as API from '../api';

function* popularMovies({ payload }) {
  try {
    yield call(delay, 500);
    const response = yield call(API.getPopularMovies, payload);
    yield put({
      type: types.SET_POPULAR_MOVIES,
      payload: response.data.results
    });
  } catch (error) {
    console.log('saga:', error);
    yield put({ type: types.SET_ERROR, payload: error.message });
  }
}

function* movieDetails({ payload }) {
  try {
    yield call(delay, 500);
    const response = yield call(API.getMovieDetails, payload);
    yield put({
      type: types.SET_MOVIE_DETAILS,
      payload: response.data
    });
  } catch (error) {
    yield put({ type: types.SET_ERROR, payload: error.message });
  }
}

function* searchMovie({ payload }) {
  try {
    yield call(delay, 500);
    const response = yield call(API.searchMovie, payload);
    yield put({
      type: types.SET_SEARCH_MOVIES,
      payload: response.data.results
    });
  } catch (error) {
    yield put({ type: types.SET_ERROR, payload: error.message });
  }
}

function* MoviesSaga() {
  yield takeLatest(types.GET_POPULAR_MOVIES, popularMovies);
  yield takeLatest(types.GET_MOVIE_DETAILS, movieDetails);
  yield takeLatest(types.SEARCH_MOVIES, searchMovie);
}

export default MoviesSaga;
