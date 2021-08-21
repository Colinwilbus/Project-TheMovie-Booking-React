import React, { useEffect } from "react";
import CarouselComponent from "./carousel/CarouselComponent";
import ComingSoonComponent from "./comingSoon/ComingSoonComponent";
import ShowFilmComponent from "./showFilm/ShowFilmComponent";
import ShowTime2Component from "./showTime/ShowTime2Component";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";

export default function HomePage() {
  const { movieList } = useSelector((state) => state.movieReducer);
  const { cinemaList } = useSelector((state) => state.cinemaReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    dispatch({
      type: "getMovieListApiAction",
    });
    dispatch({
      type: "getCinemaListApiAction",
    });
  }, []);
  return (
    <div>
      <CarouselComponent />
      <ShowFilmComponent movieList={movieList} />
      <ShowTime2Component cinemaList={cinemaList} />
      <ComingSoonComponent movieList={movieList} />
    </div>
  );
}
