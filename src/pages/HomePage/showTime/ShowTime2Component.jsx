import React from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import "./ShowTime2Style.scss";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
export default function ShowTime2Component(props) {
  const { cinemaList } = props;
  console.log(cinemaList);

  const renderShowTimes = (arrayShowTimes) => {
    if (arrayShowTimes) {
      return arrayShowTimes.slice(0, 5)?.map((film, index) => (
        <div className="row showTime__film" key={index}>
          <div className="col-12 col-md-2 col-xl-1 sTfilm__img">
            <img src={film.hinhAnh} alt="" />
          </div>
          <div className="col-12 col-md-10 col-xl-11 sTfim__detail">
            <h6>{film.tenPhim}</h6>
            <p>
              <i className="fa fa-clock" />
              <span>VIEWING TIMES</span>
            </p>
            <div>
              {film.lstLichChieuTheoPhim?.slice(0, 5).map((time, index) => (
                <NavLink to="/" key={index}>
                  <span>
                    {moment(time.ngayChieuGioChieu).format("hh:mm A")}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ));
    } else {
      return (
        <div className="row">
          <div className="col-1"></div>
          <div className="col-11">
            <h6 className="text-center">
              Sorry there is no showtime on this day.
            </h6>
          </div>
        </div>
      );
    }
  };
  const renderCinemaList = () =>
    cinemaList?.map((item, index) => (
      <TabPane tab={<img src={item.logo} />} key={index}>
        <Tabs defaultActiveKey="0" tabPosition="left" onChange={callback}>
          {item.lstCumRap.slice(0, 5)?.map((itemChild, index) => (
            <TabPane
              tab={
                <div>
                  <div>
                    <img src={item.logo} />
                  </div>
                  <p>{itemChild.tenCumRap}</p>
                  <p>{itemChild.diaChi.slice(0, 22) + "..."}</p>
                </div>
              }
              key={index}
            >
              {renderShowTimes(itemChild.danhSachPhim)}
            </TabPane>
          ))}
        </Tabs>
      </TabPane>
    ));

  function callback(key) {
    console.log(key);
  }
  return (
    <section className="showTime">
      <div className="showTime__content">
        <div className="showTime__title">
          <h2>ALL CINEMAS</h2>
        </div>
        <Tabs defaultActiveKey="0" onChange={callback}>
          {renderCinemaList()}
        </Tabs>
      </div>
    </section>
  );
}
