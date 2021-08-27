import React from "react";
import "./ContentFilmStyle.scss";
import { Tabs } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
export default function ContentFilmComponent(props) {
  const { movieDetail } = props;
  console.log({ movieDetail });

  const renderCinemaList = () =>
    movieDetail.heThongRapChieu?.map((item, index) => (
      <TabPane tab={<img src={item.logo} />} key={index}>
        <div className="viewingTimes">
          {item.cumRapChieu?.map((itemChild, index) => {
            if (itemChild.lichChieuPhim) {
              return (
                <div className="viewingTimes__item" key={index}>
                  <div className="viewingTimes__Cinema">
                    <h6>{itemChild.tenCumRap}</h6>
                  </div>
                  <div className="viewingTimes__Detail">
                    {itemChild.lichChieuPhim
                      ?.slice(0, 10)
                      .map((times, index) => (
                        <NavLink
                          to={`/check-out/${times.maLichChieu}`}
                          key={index}
                        >
                          {moment(times.ngayChieuGioChieu).format("hh:mm A")}
                        </NavLink>
                      ))}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        ;
      </TabPane>
    ));
  return (
    <section className="contentFilm">
      <div className="contentFilm__content">
        <div className="row">
          <div className="col-12 col-lg-7 contentFilm__Synopsis">
            <div className="contentFilm__title">
              <h2>SYNOPSIS</h2>
            </div>
            <div className="contentFilm__detail">
              <div className="row">
                <div className="col-12 col-lg-4 contentFilm__img">
                  <img src={movieDetail.hinhAnh} alt={movieDetail.tenPhim} />
                </div>
                <div className="col-12 col-lg-8 contentFilm__text">
                  <h6>{movieDetail.tenPhim}</h6>
                  <p>{movieDetail.moTa}</p>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td style={{ width: "30%" }}>DIRECTOR</td>
                        <td>Anthony Russo</td>
                      </tr>
                      <tr>
                        <td>STARRING</td>
                        <td>Benedict Cumberbatch, Chris Hemsworth, ...</td>
                      </tr>
                      <tr>
                        <td>GENRES</td>
                        <td>Action, Thriller, Crime</td>
                      </tr>
                      <tr>
                        <td>RELEASE DATE</td>
                        <td>
                          {moment(movieDetail.ngayKhoiChieu).format(
                            "DD/MM/yyyy"
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>RUNNING TIME</td>
                        <td> 114 mins</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 contentFilm__viewingTimes">
            <div className="contentFilm__title">
              <h2>VIEWING TIMES</h2>
            </div>
            <div className="contentFilm__detail">
              <Tabs defaultActiveKey="0">{renderCinemaList()}</Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
