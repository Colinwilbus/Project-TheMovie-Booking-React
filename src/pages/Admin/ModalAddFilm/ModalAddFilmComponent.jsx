import React, { useState } from "react";
import { Modal, Button, DatePicker, InputNumber } from "antd";
import { useFormik } from "formik";
import "./ModalAddFilmStyle.scss";
import moment from "moment";
import _ from "lodash";
import { GROUPID } from "../../../util/settings/config";
import { useDispatch } from "react-redux";
export default function ModalAddFilmComponent(props) {
  const [state, setState] = useState({ srcImg: "", activeButton: true });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      danhGia: "",
      ngayKhoiChieu: "",
      hinhAnh: "",
      maNhom: GROUPID,
    },
    validate: (values) => {
      const errors = {};
      if (!values.tenPhim.trim()) {
        errors.tenPhim = "*required";
      }
      if (!values.ngayKhoiChieu) {
        errors.ngayKhoiChieu = "*required";
      }
      if (!values.trailer.trim()) {
        errors.trailer = "*required";
      }
      if (!values.moTa.trim()) {
        errors.moTa = "*required";
      }
      if (!values.danhGia) {
        errors.danhGia = "*required";
      }
      if (!values.hinhAnh) {
        errors.hinhAnh = "*required";
      }

      return errors;
    },
  });

  //
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    let isValid = true;
    for (let key in formik.values) {
      if (formik.values[key] === "") {
        isValid = false;
      }
    }
    if (_.isEmpty(formik.errors) && !isValid) {
      setIsModalVisible(false);
    } else if (isValid) {
      let formData = new FormData();
      for (let key in formik.values) {
        if (key !== "hinhAnh") {
          formData.append(key, formik.values[key]);
        } else {
          formData.append(
            "File",
            formik.values.hinhAnh,
            formik.values.hinhAnh.name
          );
        }
      }
      dispatch({
        type: "postNewMovieApiAction",
        formData,
      });
      dispatch({
        type: "getMovieListApiAction",
      });
      formik.resetForm();
      setIsModalVisible(false);
    }
    // window.location.reload();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    formik.resetForm();
  };
  const handleChangeDate = (value) => {
    const releaseDate = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", releaseDate);
  };
  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    let reader = new FileReader();
    if (
      file?.type === "image/png" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/jpg"
    ) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setState({
          ...state,
          srcImg: e.target.result,
        });
      };
      formik.setFieldValue("hinhAnh", file);
    } else if (_.isEmpty(file)) {
      formik.setFieldValue("hinhAnh", "");
      setState({
        ...state,
        srcImg: "",
      });
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Film
      </Button>
      <Modal
        title="Create New Film"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="addFilm">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Name</label>
                  <span className="addFilm__error">
                    {formik.errors.tenPhim}
                  </span>

                  <input
                    name="tenPhim"
                    className="form-control"
                    onChange={(e) => formik.handleChange(e)}
                    value={formik.values.tenPhim}
                  />
                </div>
              </div>
              <div className="col-6"></div>
              <div className="col-6">
                <div className="form-group">
                  <label>Trailer</label>
                  <span className="addFilm__error">
                    {formik.errors.trailer}
                  </span>

                  <input
                    name="trailer"
                    className="form-control"
                    onChange={(e) => formik.handleChange(e)}
                    value={formik.values.trailer}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label>Rate</label>
                  <span className="addFilm__error">
                    {formik.errors.danhGia}
                  </span>

                  <InputNumber
                    min={1}
                    max={10}
                    onChange={(values) => {
                      formik.setFieldValue("danhGia", values);
                    }}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label>Release Date</label>
                  <span className="addFilm__error">
                    {formik.errors.ngayKhoiChieu}
                  </span>

                  <DatePicker
                    placeholder="DD/MM/YYYY"
                    format="DD/MM/YYYY"
                    onChange={(e) => handleChangeDate(e)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Image</label>
                  <span className="addFilm__error">
                    {formik.errors.hinhAnh}
                  </span>

                  <input
                    className="addFilm__InputFile"
                    type="file"
                    onChange={(e) => handleChangeFile(e)}
                    accept="image/png, image/jpeg, image/jpg"
                  />
                  <img src={state.srcImg} alt={state.srcImg} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Description</label>
                  <span className="addFilm__error">{formik.errors.moTa}</span>

                  <textarea
                    name="moTa"
                    className="form-control"
                    onChange={(e) => formik.handleChange(e)}
                    value={formik.values.moTa}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
