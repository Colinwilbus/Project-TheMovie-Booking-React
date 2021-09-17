import React from "react";
import "./BannerComingSoonStyle.scss";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
export default function BannerComingSoonComponent(props) {
  const { movieDetail } = props;
  return (
    <section className="myBannerCs">
      <div
        data-aos="zoom-out"
        className="myBannerCs__img"
        style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
      >
        <CustomCard effectColor="#000" blur={10}>
          <div className="myBannerCs__content">
            <h5>{movieDetail?.tenPhim}</h5>
            <p>
              {movieDetail.moTa?.length > 250
                ? movieDetail.moTa.slice(0, 250) + "..."
                : movieDetail.moTa}
            </p>
            <div className="myBannerCs__btn">
              <button>
                <span>
                  <i className="fa fa-play" />
                  PLAY TRAILER
                </span>
              </button>
              <span className="myBannerCs__score">{`${movieDetail.danhGia}/10`}</span>
            </div>
          </div>
        </CustomCard>
      </div>
    </section>
  );
}