import { baseService } from "../services/baseService";
import { GROUPID } from "../util/settings/config";

export class CinemaManagerService extends baseService {
  constructor() {
    super();
  }
  getCinemaListApi = () =>
    this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);

  getShowTimesFilmApi = (idFilm) =>
    this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}`);

  getShowTimesFilmCinemaApi = (idCinema) =>
    this.get(`/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${idCinema}`);
}

export const cinemaManagerService = new CinemaManagerService();
