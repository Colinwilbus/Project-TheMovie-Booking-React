import * as userType from "../types/userType";
import { USER_LOGIN, TOKEN } from "../../util/settings/config";
import { UserLoginInfo } from "../../core/models/UserModel";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  userLoginInfo: new UserLoginInfo(),
};

const userReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case userType.POST_USER_LOGIN: {
      localStorage.setItem(USER_LOGIN, JSON.stringify(action.data));
      localStorage.setItem(TOKEN, JSON.stringify(action.data.accessToken));
      return { ...state, userLogin: action.data };
    }
    case userType.POST_USER_INFO: {
      return { ...state, userLoginInfo: action.data };
    }
    default:
      return { ...state };
  }
};
export default userReducer;
