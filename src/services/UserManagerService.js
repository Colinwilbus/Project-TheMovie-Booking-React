import { baseService } from "./baseService";

class UserManagerService extends baseService {
  constructor() {
    super();
  }
  postUserLoginApi = (userLogin) =>
    this.post(`/api/QuanLyNguoiDung/DangNhap`, userLogin);
  postInfoUserLoginApi = (userAccount) =>
    this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`, userAccount);
  postNewUserApi = (newUser) =>
    this.post(`/api/QuanLyNguoiDung/DangKy`, newUser);
}

export const userManagerService = new UserManagerService();
