import React from "react";
import logo from "../../assets/img/logo_2.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import "./RegisterStyle.scss";
import { GROUPID, TYPE_USER } from "../../util/settings/config";

export default function RegisterPage(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      hoTen: "",
      soDt: "",
      email: "",
      taiKhoan: "",
      matKhau: "",
      maNhom: GROUPID,
      maLoaiNguoiDung: TYPE_USER,
    },
    onSubmit: (values) => {
      dispatch({
        type: "postNewUserApiAction",
        newUser: values,
        history: props.history,
      });
    },
  });

  return (
    <div className="register">
      <div className="register__Logo">
        <NavLink to="/home">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="register__Title">
        <h3>REGISTER NOW</h3>
      </div>
      <div className="register__Content">
        <form onSubmit={(e) => formik.handleSubmit(e)}>
          <div className="form-group">
            <input
              placeholder="Name"
              name="hoTen"
              type="text"
              className="form-control"
              onChange={(e) => formik.handleChange(e)}
            />
            <p>aaa</p>
          </div>
          <div className="form-group">
            <input
              name="taiKhoan"
              placeholder="Username"
              className="form-control"
              onChange={(e) => formik.handleChange(e)}
            />
            <p>aaa</p>
          </div>
          <div className="form-group">
            <input
              placeholder="Email"
              className="form-control"
              onChange={(e) => formik.handleChange(e)}
              name="email"
            />
            <p>aaa</p>
          </div>
          <div className="form-group">
            <input
              placeholder="Phone"
              className="form-control"
              onChange={(e) => formik.handleChange(e)}
              name="soDt"
            />
            <p>aaa</p>
          </div>
          <div className="form-group">
            <input
              placeholder="Password"
              type="password"
              className="form-control"
              onChange={(e) => formik.handleChange(e)}
              name="matKhau"
            />
            <p>aaa</p>
          </div>

          <button type="submit" className="btn btn-primary">
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}
