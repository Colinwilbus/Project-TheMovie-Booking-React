import React from "react";
import "./HeaderStyle.scss";
import logo from "../../../../assets/img/logo_2.png";
import { NavLink } from "react-router-dom";

export default function HeaderComponent(props) {
  return (
    <header>
      <div className="header__content">
        <div className="header__top">
          <div className="row">
            <div className="col-12">
              <a href="#">Sign In</a>
              <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
        <div className="header__bot ">
          <nav className="navbar navbar-expand-md  p-0 ">
            <NavLink exact className="navbar-brand" to="/home">
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
                  <NavLink
                    exact
                    className="nav-link"
                    activeClassName="active__Link"
                    to="/movie"
                  >
                    MOVIE
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link"
                    activeClassName="active"
                    to="/booking"
                  >
                    BOOKING
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link"
                    activeClassName="active"
                    to="/comingSoon"
                  >
                    COMING SOON
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
