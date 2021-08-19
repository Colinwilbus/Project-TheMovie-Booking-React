import React, { useState, useEffect, useRef } from "react";
import { settingCarousel, settingsSliderNav } from "./ComingSoonSlickSetting";
import "./ComingSoonStyle.scss";
import Slider from "react-slick";
import moment from "moment";

const ComingSoonComponent = (props) => {
  const { movieList } = props;

  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });

  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const renderMovieListComingSoon = () => {
    const slideArray = [];
    const bannerArray = [];
    movieList?.slice(32, 40).forEach((item, index) => {
      slideArray.push(
        <div className="comingSoon__item" key={index}>
          <div className="item__img">
            <img src={item.hinhAnh} alt={item.tenPhim} />
          </div>
          <div className="item__text">
            <h5>{item.tenPhim}</h5>
            <p>{moment(item.ngayKhoiChieu).format("DD/MM/YYYY")}</p>
          </div>
        </div>
      );
      bannerArray.push(
        <div className="comingSoon__Slider " key={index}>
          <div className="comingSoon__bg">
            <img src="./img/slide-1.png" alt="" />
          </div>
          <div className="comingSoon__banner ">
            <h2>COMING SOON</h2>
            <div className="row mt-5 ">
              <div className=" col-12 col-md-6 comingSoon__text">
                <p>DRAMA, THRILLER</p>
                <h3>Deepwater Horizon</h3>
                <div className="comingSoon__star">
                  <span>
                    <i className="fa fa-calendar-alt" />
                    30 September, 2017
                  </span>
                </div>
                <p>
                  A dramatization of the April 2010 disaster, when the offshore
                  drilling rig Deepwater Horizon exploded and created the worst
                  oil spill in U.S. history.
                </p>
                <a href="#">
                  MORE INFO <i className="fa fa-angle-right" />
                </a>
              </div>
              <div className="col-12 col-md-6 comingSoon__img">
                <img
                  className="img-fluid"
                  src={item.hinhAnh}
                  alt={item.tenPhim}
                />
                <div className="comingSoon__play">
                  <i className="fa fa-play" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="comingSoon__content">
        <div className="comingSoon__detail">
          <Slider
            asNavFor={state.nav2}
            ref={(slider) => (slider1.current = slider)}
            {...settingCarousel}
          >
            {bannerArray}
          </Slider>
        </div>
        <div className="comingSoon__carousel container">
          <div className="comingSoon__slick">
            <Slider
              asNavFor={state.nav1}
              ref={(slider) => (slider2.current = slider)}
              {...settingsSliderNav}
            >
              {slideArray}
            </Slider>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="comingSoon ">{renderMovieListComingSoon()}</section>
  );
};

export default ComingSoonComponent;
