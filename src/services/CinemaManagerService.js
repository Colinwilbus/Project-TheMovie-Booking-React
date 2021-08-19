import { baseService } from "../services/baseService";
import { GROUPID } from "../util/settings/config";

export class CinemaManagerService extends baseService {
  constructor() {
    super();
  }
  getCinemaListApi = () =>
    this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
}

export const cinemaManagerService = new CinemaManagerService();
