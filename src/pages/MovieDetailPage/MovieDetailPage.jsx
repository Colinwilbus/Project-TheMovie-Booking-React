import React, { useEffect } from "react";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "./MovieDetailStyle.scss";
import BannerComponent from "./banner/BannerComponent";
import Aos from "aos";
import ContentFilmComponent from "./contentFilm/ContentFilmComponent";
import { useSelector, useDispatch } from "react-redux";

export default function MovieDetailPage(props) {
  const { id } = props.match.params;
  const { showTimesFilm } = useSelector((state) => state.cinemaReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    dispatch({
      type: "getShowTimeFilmApiAction",
      id,
      loading: true,
    });
  }, []);
  return (
    <div>
      <BannerComponent movieDetail={showTimesFilm} />
      <ContentFilmComponent movieDetail={showTimesFilm} />
    </div>
  );
}
