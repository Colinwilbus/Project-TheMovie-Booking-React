import { call, put, takeLatest } from "redux-saga/effects";
import {
  CinemaManagerService,
  cinemaManagerService,
} from "../../services/CinemaManagerService";
import * as cinemaType from "../types/cinemaType";

function* getCinemaListApiAction(action) {
  const { data } = yield call(() => cinemaManagerService.getCinemaListApi());
  try {
    yield put({
      type: cinemaType.GET_CINEMA_LIST,
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* getCinemaListApiActionSaga() {
  yield takeLatest("getCinemaListApiAction", getCinemaListApiAction);
}

function* getShowTimeFilmApiAction(action) {
  const { data } = yield call(() =>
    cinemaManagerService.getShowTimesFilmApi(action.id)
  );
  try {
    yield put({
      type: cinemaType.GET_SHOWTIMES_FILM,
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* getShowTimesFilmActionSaga() {
  yield takeLatest("getShowTimeFilmApiAction", getShowTimeFilmApiAction);
}

function* getShowTimesFilmCinemaAction(action) {
  const res = yield call(() =>
    cinemaManagerService.getShowTimesFilmCinemaApi(action.idCinema)
  );
  try {
    console.log(res);
    yield put({
      type: cinemaType.GET_SHOWTIMES_FILM_CINEMA,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* getShowTimesFilmCinemaActionSaga() {
  yield takeLatest(
    "getShowTimesFilmCinemaAction",
    getShowTimesFilmCinemaAction
  );
}
