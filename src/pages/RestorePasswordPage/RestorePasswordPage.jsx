import React, { useState, useEffect } from "react";
import "./RestorePasswordStyle.scss";
import logo from "../../assets/img/logo_2.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { Steps, Button } from "antd";
import { GROUPID } from "../../util/settings/config";
import _ from "lodash";

const { Step } = Steps;

export default function RestorePasswordPage(props) {
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const { listUser } = useSelector((state) => state.userReducer);
  const [disable, setDisable] = useState(true);
  const [notification, setNotification] = useState(false);

  console.log("listUser", listUser);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: listUser[0]?.taiKhoan,
      hoTen: listUser[0]?.hoTen,
      email: "",
      soDt: "",
      maLoaiNguoiDung: listUser[0]?.maLoaiNguoiDung,
      matKhau: "",
      maNhom: GROUPID,
    },
  });

  useEffect(() => {
    if (_.isEmpty(listUser) || listUser.length >= 2) {
      setDisable(true);
      formik.setFieldValue("taiKhoan", "");
    } else {
      setDisable(false);
      setNotification(false);
    }
  }, [listUser]);

  const renderNotification = () => {
    if (notification) {
      if (_.isEmpty(listUser) || listUser.length >= 2) {
        return <span>Tài khoản không chính xác</span>;
      } else {
      }
    }
  };
  const next = () => {
    setCurrent(current + 1);
    setDisable(true);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleChangeUsername = (e) => {
    formik.setFieldValue("taiKhoan", e.target.value);
    setDisable(true);
  };
  const handleChangeEmail = (e) => {
    formik.setFieldValue("email", e.target.value);
    setDisable(true);
  };
  const handleChangePhonenumber = (e) => {
    formik.setFieldValue("soDt", e.target.value);

    setDisable(true);
  };
  const handleChangePassword = (e) => {
    formik.setFieldValue("matKhau", e.target.value);
    setDisable(false);
  };

  const formUsername = () => (
    <form>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="form-group">
            <input
              placeholder="Username"
              name="taiKhoan"
              onChange={(e) => handleChangeUsername(e)}
              className="form-control"
              value={formik.values.taiKhoan}
              onBlur={(e) => formik.handleBlur(e)}
            />
            <p className="restorePassword__validate">{renderNotification()}</p>
          </div>
        </div>
      </div>
      <div className="restorePassword__btn">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (formik.values.taiKhoan !== "") {
              dispatch({
                type: "getListUserApiAction",
                keyWord: formik.values.taiKhoan,
              });
            }
            setNotification(true);
          }}
        >
          <span>Check</span>
        </button>
      </div>
    </form>
  );
  const formInfo = () => (
    <form>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="form-group">
            <input
              placeholder="Email"
              name="email"
              onChange={(e) => handleChangeEmail(e)}
              className="form-control"
              value={formik.values.email}
              onBlur={(e) => formik.handleBlur(e)}
            />
            <p className="restorePassword__validate"></p>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="form-group">
            <input
              placeholder="PhoneNumber"
              name="soDt"
              onChange={(e) => handleChangePhonenumber(e)}
              className="form-control"
              value={formik.values.soDt}
              onBlur={(e) => formik.handleBlur(e)}
            />
            <p className="restorePassword__validate"></p>
          </div>
        </div>
      </div>
      <div className="restorePassword__btn">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            console.log(formik.values);
            if (
              listUser[0].email === formik.values.email &&
              listUser[0].soDt === formik.values.soDt
            ) {
              setDisable(false);
            } else {
              setDisable(true);
            }
          }}
        >
          <span>Check</span>
        </button>
      </div>
    </form>
  );
  const formPassword = () => (
    <form>
      <div class="row">
        <div className="col-12 col-sm-6">
          <div className="form-group">
            <input
              type="password"
              placeholder="New Password"
              name="matKhau"
              onChange={(e) => handleChangePassword(e)}
              className="form-control"
              value={formik.values.matKhau}
              onBlur={(e) => formik.handleBlur(e)}
            />
            <p className="restorePassword__validate"></p>
          </div>
        </div>
      </div>
    </form>
  );
  const steps = [
    {
      title: "Account Verification",
      content: formUsername(),
    },
    {
      title: "Infomation Verification",
      content: formInfo(),
    },
    {
      title: "Change Password",
      content: formPassword(),
    },
  ];
  return (
    <div className="restorePassword">
      <div className="restorePassword__Logo">
        <NavLink to="/home">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="restorePassword__Content">
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button disabled={disable} type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              className="btn-done"
              disabled={formik.values.matKhau === "" ? true : false}
              type="primary"
              onClick={() => {
                console.log(formik.values);
                dispatch({
                  type: "putUpdateUserApiAction",
                  form: formik.values,
                });
              }}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
