import { call, put, takeLatest } from "redux-saga/effects";
import { cinemaManagerService } from "../../services/CinemaManagerService";
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
