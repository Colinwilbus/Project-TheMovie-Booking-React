import { call, takeLatest, put, delay } from "@redux-saga/core/effects";
import { userManagerService } from "../../services/UserManagerService";
import * as userType from "../types/userType";
import {
  DISLAY_LOADING,
  DISLAY_LOADING_MODAL,
  HIDE_LOADING,
  HIDE_LOADING_MODAL,
} from "../types/lazyLoadingType";
import { notification } from "antd";
// USER_LOGIN
function* postUserLoginAction(action) {
  try {
    const { data } = yield call(() =>
      userManagerService.postUserLoginApi(action.userLogin)
    );
    yield put({
      type: userType.POST_USER_LOGIN,
      data,
    });
    notification.open({
      message: "Notification",
      description: "Đăng nhập thành công",
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 1.5,
    });
    action.history.goBack();
  } catch (err) {
    notification.open({
      message: "Notification",
      description: err.response?.data,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 1.5,
    });
  }
}
export function* postUserLoginApiAcionSaga() {
  yield takeLatest("postUserLoginAction", postUserLoginAction);
}
// INFO_USER_LOGIN
function* postUserLoginInfoApiAction(action) {
  try {
    if (action.loading) {
      yield put({
        type: DISLAY_LOADING,
      });
    }
    if (action.loadingModal) {
      yield put({
        type: DISLAY_LOADING_MODAL,
      });
    }
    const { data } = yield call(() =>
      userManagerService.postInfoUserLoginApi(action.userAccount)
    );

    yield put({
      type: userType.POST_USER_INFO,
      data,
    });
    if (action.loading) {
      yield delay(1000);
      yield put({
        type: HIDE_LOADING,
      });
    }
    if (action.loadingModal) {
      yield delay(1000);
      yield put({
        type: HIDE_LOADING_MODAL,
      });
    }
  } catch (error) {
    if (action.loading) {
      yield delay(1000);
      yield put({
        type: HIDE_LOADING,
      });
    }
    if (action.loadingModal) {
      yield delay(1000);
      yield put({
        type: HIDE_LOADING_MODAL,
      });
    }
    console.log(error.response?.data);
  }
}
export function* postUserLoginInfoApiActionSaga() {
  yield takeLatest("postUserLoginInfoApiAction", postUserLoginInfoApiAction);
}
// USER_REGISTER
function* postNewUserApiAction(action) {
  try {
    const res = yield call(() =>
      userManagerService.postNewUserApi(action.newUser)
    );
    notification.open({
      message: "Notification",
      description: "đăng ký thành công",
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 1.5,
    });
    action.history.push("/home");
  } catch (error) {
    notification.open({
      message: "Notification",
      description: error.response?.data,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 1.5,
    });
  }
}
export function* postNewUserApiActionSaga() {
  yield takeLatest("postNewUserApiAction", postNewUserApiAction);
}
// USER_REGISTER_ADMIN
function* postNewUserAdminApiAction(action) {
  try {
    const res = yield call(() =>
      userManagerService.postNewUserAdminApi(action.newUser)
    );

    notification.open({
      message: "Notification",
      description: "Thêm tài khoản thành công",
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 1.5,
    });
    yield put({
      type: userType.POST_NEW_USER,
      form: action.newUser,
    });
  } catch (error) {
    notification.open({
      message: "Notification",
      description: error.response?.data,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 1.5,
    });
  }
}
export function* postNewUserAdminApiActionSaga() {
  yield takeLatest("postNewUserAdminApiAction", postNewUserAdminApiAction);
}
// GET_LIST_USER
function* getListUserApiAction(action) {
  try {
    const res = yield call(() =>
      userManagerService.getUserListApi(action.keyWord)
    );
    yield put({
      type: userType.GET_LIST_USER,
      data: res.data,
    });
  } catch (error) {
    console.log(error.response?.data);
  }
}
export function* getListUserApiActionSaga() {
  yield takeLatest("getListUserApiAction", getListUserApiAction);
}
// UPDATE_USER
function* putUpdateUserApiAction(action) {
  try {
    const res = yield call(() =>
      userManagerService.putUpdateInfoUserApi(action.form)
    );

    notification.open({
      message: "Notification",
      description: "update tài khoản thành công",
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 1.5,
    });

    yield put({
      type: userType.POST_UPDATE_USER,
      form: action.form,
    });
    // if (action.history) {
    //   action.history.push("login");
    // }
  } catch (error) {
    notification.open({
      message: "Notification",
      description: error.response?.data,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 1.5,
    });
  }
}

export function* putUpdateUserApiActionSaga() {
  yield takeLatest("putUpdateUserApiAction", putUpdateUserApiAction);
}

// DELETE_USER

function* deleteInfoUserApiAction(action) {
  try {
    const res = yield call(() =>
      userManagerService.deleteInfoUserApi(action.userName)
    );

    notification.open({
      message: "Notification",
      description: "xóa tài khoản thành công!",
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 1.5,
    });
  } catch (error) {
    notification.open({
      message: "Notification",
      description: error.response?.data,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 1.5,
    });
  }
}

export function* deleteInfoUserApiActionSaga() {
  yield takeLatest("deleteInfoUserApiAction", deleteInfoUserApiAction);
}
