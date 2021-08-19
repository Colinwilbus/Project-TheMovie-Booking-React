import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import createMiddleWareSaga from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const middleWareSaga = createMiddleWareSaga();

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;
