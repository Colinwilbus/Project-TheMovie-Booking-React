import { baseService } from "../services/baseService";
import { GROUPID } from "../util/settings/config";

export class MovieManagerService extends baseService {
  constructor() {
    super();
  }

  getMovieListApi = () =>
    this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
}

export const movieManagerService = new MovieManagerService();
