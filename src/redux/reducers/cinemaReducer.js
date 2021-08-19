import * as cinemaType from "../types/cinemaType";

const stateDefault = {
  cinemaList: [],
};

const cinemaReducer = (state = stateDefault, action) => {
  console.log(action.type);
  switch (action.type) {
    case cinemaType.GET_CINEMA_LIST: {
      return { ...state, cinemaList: action.data };
    }
    default:
      return { ...state };
  }
};
export default cinemaReducer;
