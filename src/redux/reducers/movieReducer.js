import * as movieType from "../types/movieType";

const stateDefault = {
  movieList: [],
  movieDetail: {},
};

const movieReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case movieType.GET_MOVIE_LIST: {
      return { ...state, movieList: action.data };
    }
    case movieType.GET_MOVIE_DETAIL: {
      return { ...state, movieDetail: action.data };
    }
    default:
      return { ...state };
  }
};
export default movieReducer;
