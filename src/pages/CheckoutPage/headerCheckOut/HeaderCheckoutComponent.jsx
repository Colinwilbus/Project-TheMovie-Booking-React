import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo_2.png";
import "./HeaderCheckoutStyle.scss";

export default function HeaderCheckoutComponent(props) {
  const [state, setState] = useState({
    setHeader: false,
  });
  //   console.log(state.setHeader);
  const { userLogin } = props;
  const { thongTinPhim } = props.listChair;

  const changeHeader = () => {
    if (
      document.body.scrollTop > 121 ||
      document.documentElement.scrollTop > 121
    ) {
      document.getElementById("headerCheckOutId").style.backgroundColor =
        "rgba(0, 0, 0, 0.649)";
    } else {
      document.getElementById("headerCheckOutId").style.backgroundColor =
        "rgba(0, 0, 0, 0.249)";
    }
  };
  window.addEventListener("scroll", changeHeader);
  return (
    <header
      data-aos="fade-down"
      data-aos-once="true"
      className="headerCheckOut"
      id="headerCheckOutId"
    >
      <div className="headerCheckOut__content">
        <nav>
          <NavLink className="headerCheckOut__logo" to="/home">
            <img src={logo} alt="" />
          </NavLink>
          <div className="headerCheckOut__InfoCinema">
            <div className="row">
              <div className="col-1 headerCheckOut__Img">
                <img src={thongTinPhim.hinhAnh} alt="" />
              </div>
              <div className="col-11 headerCheckOut__Info">
                <h5>{thongTinPhim.tenCumRap}</h5>
                <p>{thongTinPhim.diaChi}</p>
              </div>
            </div>
          </div>
          <div className="headerCheckOut__user">
            <NavLink to="">{userLogin.taiKhoan}</NavLink>

            <NavLink
              to="/home"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Sign Out
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
