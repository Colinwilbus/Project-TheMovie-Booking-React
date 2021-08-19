import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import cinemaReducer from "./cinemaReducer";
const rootReducer = combineReducers({
  movieReducer,
  cinemaReducer,
});
export default rootReducer;
