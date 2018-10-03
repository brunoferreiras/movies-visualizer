import * as types from '../actions/types';
import * as API from '../api';
import { call, put, takeLatest } from 'redux-saga/effects';

function* popularMovies({ payload }) {
  try {
    const response = yield call(API.getPopularMovies, payload);
    yield put({
      type: types.SET_POPULAR_MOVIES,
      payload: response.data.results
    });
  } catch (error) {
    console.log(error);
  }
}

function* movieDetails({ payload }) {
  try {
    const response = yield call(API.getMovieDetails, payload);
    yield put({
      type: types.SET_MOVIE_DETAILS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
}

function* searchMovie({ payload }) {
  try {
    const response = yield call(API.searchMovie, payload);
    yield put({
      type: types.SET_SEARCH_MOVIES,
      payload: response.data.results
    });
  } catch (error) {
    console.log(error);
  }
}

function* MoviesSaga() {
  yield takeLatest(types.GET_POPULAR_MOVIES, popularMovies);
  yield takeLatest(types.GET_MOVIE_DETAILS, movieDetails);
  yield takeLatest(types.SEARCH_MOVIES, searchMovie);
}

export default MoviesSaga;
