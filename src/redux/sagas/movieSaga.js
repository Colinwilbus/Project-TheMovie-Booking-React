import { call, takeLatest, put } from "redux-saga/effects";
import * as movieType from "../types/movieType";
import { movieManagerService } from "../../services/MovieManagerService";

function* getMovieListApiAction(action) {
  const { data } = yield call(() => movieManagerService.getMovieListApi());
  try {
    yield put({
      type: movieType.GET_MOVIE_LIST,
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* getMovieListApiActionSaga() {
  yield takeLatest("getMovieListApiAction", getMovieListApiAction);
}

function* getMovieDetailAction(action) {
  const { data } = yield call(() =>
    movieManagerService.getMovieDetailApi(action.id)
  );
  console.log(data);
  try {
    yield put({
      type: movieType.GET_MOVIE_DETAIL,
      data,
    });
  } catch (error) {
    console.log(error);
  }
}
export function* getMovieDetailApiActionSaga() {
  yield takeLatest("getMovieDetailAction", getMovieDetailAction);
}
