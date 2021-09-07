import { baseService } from "../services/baseService";
import { GROUPID } from "../util/settings/config";

export class MovieManagerService extends baseService {
  constructor() {
    super();
  }

  getMovieListApi = () =>
    this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  getMovieDetailApi = (idFilm) =>
    this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`);
  postNewMovieApi = (formData) =>
    this.post(`api/QuanLyPhim/ThemPhimUploadHinh`, formData);
}

export const movieManagerService = new MovieManagerService();
