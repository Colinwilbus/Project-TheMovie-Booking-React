import React from "react";
import "./HeaderStyle.scss";
import logo from "../../../../assets/img/logo_2.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

export default function HeaderComponent(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  console.log(userLogin);
  return (
    <header data-aos="zoom-out" data-aos-once="true">
      <div className="header__content">
        <div className="header__top">
          <div className="row">
            <div className="col-12">
              {userLogin ? (
                <NavLink to="/login">Sign In</NavLink>
              ) : (
                <NavLink to="">{userLogin.taiKhoan}</NavLink>
              )}
              <NavLink to="/register">Sign Up</NavLink>
            </div>
          </div>
        </div>
        <div className="header__bot ">
          <nav className="navbar navbar-expand-md  p-0 ">
            <NavLink className="navbar-brand" to="/home">
              <img src={logo} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMovie"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i class="fa fa-stream"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMovie">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    activeClassName="active__Link"
                    to="/"
                  >
                    HOME <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active__Link"
                    smooth="true"
                    duration="500"
                    to="showFilmId"
                  >
                    MOVIE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active__Link"
                    smooth="true"
                    duration="500"
                    to="showTimeId"
                  >
                    BOOKING
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active__Link"
                    to="comingSoonId"
                    smooth="true"
                    duration="500"
                  >
                    COMING SOON
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
