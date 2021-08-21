import React, { useEffect } from "react";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "./MovieDetailStyle.scss";
import BannerComponent from "./banner/BannerComponent";
import Aos from "aos";
import ContentFilmComponent from "./contentFilm/ContentFilmComponent";
import { useSelector, useDispatch } from "react-redux";

export default function MovieDetailPage(props) {
  const { id } = props.match.params;
  console.log(id);
  const { movieDetail } = useSelector((state) => state.movieReducer);
  console.log(movieDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    dispatch({
      type: "getMovieDetailAction",
      id,
    });
  }, []);
  return (
    <div>
      <BannerComponent movieDetail={movieDetail} />
      <ContentFilmComponent movieDetail={movieDetail} />
    </div>
  );
}
