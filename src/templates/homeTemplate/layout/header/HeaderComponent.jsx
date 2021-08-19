import React from "react";
import "./HeaderStyle.scss";
import logo from "../../../../assets/img/logo_2.png";

export default function HeaderComponent() {
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
            <a className="navbar-brand" href="./index.html">
              <img src={logo} alt="" />
            </a>
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
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    HOME <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WHAT'S ON
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    SHORTCODES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
