import { call, takeLatest, put } from "@redux-saga/core/effects";
import { userManagerService } from "../../services/UserManagerService";
import * as userType from "../types/userType";

function* postUserLoginAction(action) {
  const { data } = yield call(() =>
    userManagerService.postUserLoginApi(action.userLogin)
  );
  try {
    yield put({
      type: userType.POST_USER_LOGIN,
      data,
    });
    action.history.goBack();
  } catch (error) {
    console.log(error);
  }
}
export function* postUserLoginApiAcionSaga() {
  yield takeLatest("postUserLoginAction", postUserLoginAction);
}
function* postUserLoginInfoApiAction(action) {
  const { data } = yield call(() =>
    userManagerService.postInfoUserLoginApi(action.userAccount)
  );
  try {
    yield put({
      type: userType.POST_USER_INFO,
      data,
    });
  } catch (error) {
    console.log(error);
  }
}
export function* postUserLoginInfoApiActionSaga() {
  yield takeLatest("postUserLoginInfoApiAction", postUserLoginInfoApiAction);
}
