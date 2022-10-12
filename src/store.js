import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducers";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION_ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION_()
      : (f) => f
  )
);
export default store;
