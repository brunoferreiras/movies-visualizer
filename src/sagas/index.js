import { fork, all } from 'redux-saga/effects';
import MoviesSaga from './movies';

export default function* rootSaga() {
  yield all([fork(MoviesSaga)]);
}
