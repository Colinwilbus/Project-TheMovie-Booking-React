import { all } from "redux-saga/effects";
import * as movieSaga from "./movieSaga";
import * as cinemaSaga from "./cinemaSaga";
import * as userSaga from "./userSaga";
import * as bookingSaga from "./bookingSaga";

function* rootSaga() {
  yield all([
    movieSaga.getMovieListApiActionSaga(),
    movieSaga.getMovieDetailApiActionSaga(),
    //-----//
    cinemaSaga.getCinemaListApiActionSaga(),
    cinemaSaga.getShowTimesFilmActionSaga(),
    cinemaSaga.getShowTimesFilmCinemaActionSaga(),
    //-----//
    userSaga.postUserLoginApiAcionSaga(),
    userSaga.postUserLoginInfoApiActionSaga(),
    //-----//
    bookingSaga.getListChairApiActionSaga(),
    bookingSaga.bookingTicketApiActionSaga(),
  ]);
}
export default rootSaga;
