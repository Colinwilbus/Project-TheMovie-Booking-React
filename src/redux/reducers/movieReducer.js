import * as movieType from "../types/movieType";
import { MovieDetail } from "../../core/models/MovieModel";

const stateDefault = {
  movieList: [],
  movieDetail: new MovieDetail(),
  newMovie: "",
  updateMovie: "",
  idDeleteMovie: "",
};

const movieReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case movieType.GET_MOVIE_LIST: {
      return { ...state, movieList: action.data };
    }
    case movieType.GET_MOVIE_DETAIL: {
      return { ...state, movieDetail: action.data };
    }
    case movieType.POST_NEW_MOVIE: {
      return { ...state, newMovie: action.form };
    }
    case movieType.POST_UPDATE_MOVIE: {
      return { ...state, updateMovie: action.form };
    }
    // case movieType.DELETE_MOVIE: {
    //   return { ...state, idDeleteMovie: action.id };
    // }
    default:
      return { ...state };
  }
};
export default movieReducer;
