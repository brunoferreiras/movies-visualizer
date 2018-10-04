import { fork, all } from 'redux-saga/effects';
import MoviesSaga from './movies';
import FavoritesSaga from './favorites';

export default function* rootSaga() {
  yield all([fork(MoviesSaga), fork(FavoritesSaga)]);
}
