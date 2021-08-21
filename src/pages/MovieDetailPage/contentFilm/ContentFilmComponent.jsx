import React from "react";
import "./ContentFilmStyle.scss";
import { Tabs } from "antd";
import moment from "moment";

const { TabPane } = Tabs;
export default function ContentFilmComponent(props) {
  const { movieDetail } = props;
  function callback(key) {
    console.log(key);
  }
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
              <Tabs defaultActiveKey="0" onChange={callback}>
                <TabPane
                  tab={<img src="https://picsum.photos/1200/300" />}
                  key="0"
                >
                  Content of Tab Pane 1
                </TabPane>
                <TabPane
                  tab={<img src="https://picsum.photos/1200/300" />}
                  key="1"
                >
                  Content of Tab Pane 2
                </TabPane>
                <TabPane
                  tab={<img src="https://picsum.photos/1200/300" />}
                  key="3"
                >
                  Content of Tab Pane 1
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
