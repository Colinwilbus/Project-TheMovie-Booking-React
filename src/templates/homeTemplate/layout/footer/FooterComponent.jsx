import React from "react";
import "./FooterStyle.scss";

export default function FooterComponent() {
  return (
    <footer>
      <div className="footer__content container">
        <div className="footer__top">
          <div className="row">
            <div className="col-3">
              <h3>GET IN TOUCH</h3>
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Give us feedback</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>ABOUT MOVIE STAR</h3>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Find us</a>
                </li>
                <li>
                  <a href="#">Schedule</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>LEGAL STUFF</h3>
              <ul>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Cookie policy</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>CONNECT WITH US</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                    <span> Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                    <span> Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                    <span> Google +</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bot">
          <p>2017 © Movie Star / Web design by Klever media</p>
        </div>
      </div>
    </footer>
  );
}
