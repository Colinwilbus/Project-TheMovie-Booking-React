import * as bookingType from "../types/bookingType";
import * as lazyLoadingType from "../types/lazyLoadingType";
import { call, put, takeLatest, delay } from "redux-saga/effects";
import { bookingService } from "../../services/BookingService";

function* getListChairApiAction(action) {
  const { data } = yield call(() =>
    bookingService.getListChairCinemaApi(action.idShowtimes)
  );
  yield put({
    type: lazyLoadingType.DISLAY_LOADING,
  });
  try {
    yield put({
      type: bookingType.GET_LIST_CHAIR_CINEMA,
      data,
    });
  } catch (error) {
    console.log(error);
  }
  yield delay(2000);
  yield put({
    type: lazyLoadingType.HIDE_LOADING,
  });
}
export function* getListChairApiActionSaga() {
  yield takeLatest("getListChairApiAction", getListChairApiAction);
}

function* bookingTicketApiAction(action) {
  console.log("infoBK", action.infoBooking);
  const { data } = yield call(() =>
    bookingService.bookingTicketApi(action.infoBooking)
  );
  yield put({
    type: lazyLoadingType.DISLAY_LOADING,
  });
  try {
    yield put({
      type: bookingType.BOOKING_TICKET,
      history: action.history,
    });
    alert(data);
  } catch (error) {
    console.log(error);
  }
  yield delay(2000);
  yield put({
    type: lazyLoadingType.HIDE_LOADING,
  });
}
export function* bookingTicketApiActionSaga() {
  yield takeLatest("bookingTicketApiAction", bookingTicketApiAction);
}
