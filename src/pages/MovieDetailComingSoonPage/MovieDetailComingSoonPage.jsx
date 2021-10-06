import React, { useEffect } from "react";
import "./MovieDetailComingSoonStyle.scss";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { useSelector, useDispatch } from "react-redux";

import Aos from "aos";
import BannerComingSoonComponent from "./bannerCs/BannerComingSoonComponent";
import ContentComingSoonComponent from "./contentCs/ContentComingSoonComponent";

export default function MovieDetailComingSoonPage(props) {
  const { id } = props.match.params;
  const { showTimesFilm } = useSelector((state) => state.cinemaReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({
    //   type: DISLAY_LOADING,
    // });
    Aos.init({
      duration: 1000,
    });
    dispatch({
      type: "getShowTimeFilmApiAction",
      id,
      loading: true,
    });
    // setTimeout(() => {
    //   dispatch({
    //     type: HIDE_LOADING,
    //   });
    // }, 2000);
  }, []);
  return (
    <div>
      <BannerComingSoonComponent movieDetail={showTimesFilm} />
      <ContentComingSoonComponent movieDetail={showTimesFilm} />
    </div>
  );
}
