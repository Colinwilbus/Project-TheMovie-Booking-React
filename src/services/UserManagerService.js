import { baseService } from "./baseService";

class UserManagerService extends baseService {
  constructor() {
    super();
  }
  postUserLoginApi = (userLogin) =>
    this.post(`/api/QuanLyNguoiDung/DangNhap`, userLogin);
  postInfoUserLoginApi = (userAccount) =>
    this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`, userAccount);
}

export const userManagerService = new UserManagerService();
