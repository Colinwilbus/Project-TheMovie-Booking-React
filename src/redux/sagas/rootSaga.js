import { all } from "redux-saga/effects";
import * as movieSaga from "./movieSaga";
import * as cinemaSaga from "./cinemaSaga";

function* rootSaga() {
  yield all([
    movieSaga.getMovieListApiActionSaga(),
    cinemaSaga.getCinemaListApiActionSaga(),
    movieSaga.getMovieDetailApiActionSaga(),
  ]);
}
export default rootSaga;
