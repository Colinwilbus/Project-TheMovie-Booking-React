import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderHiddenStyle.scss";
import logo from "../../../../assets/img/logo_2.png";

export default function HeaderHidenComponent() {
  const [state, setState] = useState({ navBar: false });

  const changeHeader = () => {
    if (window.scrollY >= 150) {
      setState({
        ...state,
        navBar: true,
      });
    } else {
      setState({
        ...state,
        navBar: false,
      });
    }
  };
  window.addEventListener("scroll", changeHeader);
  return (
    <section
      className={
        state.navBar ? "navbarhidden navbarhidden__active" : "navbarhidden "
      }
      id="navbarhiddenid"
    >
      <div className="navbarhidden__overlay">
        <div className="navbarhidden__content ">
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
                    to="/home"
                  >
                    COMING SOON
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
