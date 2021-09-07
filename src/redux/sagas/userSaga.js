import { call, takeLatest, put, delay } from "@redux-saga/core/effects";
import { userManagerService } from "../../services/UserManagerService";
import * as userType from "../types/userType";
import { DISLAY_LOADING, HIDE_LOADING } from "../types/lazyLoadingType";

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
  yield put({
    type: DISLAY_LOADING,
  });
  try {
    yield put({
      type: userType.POST_USER_INFO,
      data,
    });
  } catch (error) {
    console.log(error);
  }
  yield delay(2000);
  yield put({
    type: HIDE_LOADING,
  });
}
export function* postUserLoginInfoApiActionSaga() {
  yield takeLatest("postUserLoginInfoApiAction", postUserLoginInfoApiAction);
}

function* postNewUserApiAction(action) {
  const res = yield call(() =>
    userManagerService.postNewUserApi(action.newUser)
  );
  try {
    console.log(res);
    alert("Đăng ký Thành Công!!!");
    action.history.push("/home");
  } catch (error) {
    console.log(error);
  }
}
export function* postNewUserApiActionSaga() {
  yield takeLatest("postNewUserApiAction", postNewUserApiAction);
}
