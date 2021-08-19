import React from "react";
import "./FilmStyle.scss";
import moment from "moment";

export default function FilmComponent(props) {
  const { item } = props;
  return (
    <div className="showFilm__item">
      <div className="showFilm__img">
        <div className="showFilm__overlay">
          <i className="fa fa-play showFilm__play" />
          <a href="#">VIEW DETAILS</a>
          <p>{moment(item.ngayKhoiChieu).format("dddd-DD/MM/yyyy")}</p>
          <div className="showFilm__star">
            <i className="fa fa-star star__check" />
            <i className="fa fa-star star__check" />
            <i className="fa fa-star star__check" />
            <i className="fa fa-star star__check" />
            <i className="fa fa-star " />
          </div>
        </div>
        <img src={item.hinhAnh} alt={item.tenPhim} />
      </div>
      <div className="showFilm__text">
        <p>{item.tenPhim}</p>
        <div className="showFilm__booking">
          <button>
            <span>BOOKING</span>
          </button>
        </div>
      </div>
    </div>
  );
}
