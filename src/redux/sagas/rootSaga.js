import { all } from "redux-saga/effects";
import * as movieSaga from "./movieSaga";
import * as cinemaSaga from "./cinemaSaga";
import * as userSaga from "./userSaga";
import * as bookingSaga from "./bookingSaga";

function* rootSaga() {
  yield all([
    movieSaga.getMovieListApiActionSaga(),
    movieSaga.getMovieDetailApiActionSaga(),
    movieSaga.postNewMovieApiActionSaga(),

    //-----//
    cinemaSaga.getCinemaListApiActionSaga(),
    cinemaSaga.getShowTimesFilmActionSaga(),
    cinemaSaga.getShowTimesFilmCinemaActionSaga(),
    //-----//
    userSaga.postUserLoginApiAcionSaga(),
    userSaga.postUserLoginInfoApiActionSaga(),
    userSaga.postNewUserApiActionSaga(),

    //-----//
    bookingSaga.getListChairApiActionSaga(),
    bookingSaga.bookingTicketApiActionSaga(),
  ]);
}
export default rootSaga;
