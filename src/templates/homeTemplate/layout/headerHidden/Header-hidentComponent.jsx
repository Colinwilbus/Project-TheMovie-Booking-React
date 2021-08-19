import React from "react";
import style from "./Header-hidden.css";

export default function HeaderHidenComponent() {
  return (
    <section className="navbarhidden" id="navbarhiddenid">
      <div className="navbarhidden__overlay container">
        <div className="navbarhidden__content ">
          <nav className="navbar navbar-expand-lg navbar-dark p-0 ">
            <a className="navbar-brand" href="./index.html">
              <img className="img-fluid" src="./img/logo.svg" alt />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarhidden"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarhidden">
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
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#">
                    NEWS
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      NEWS SINGLE
                    </a>
                  </div>
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
    </section>
  );
}
