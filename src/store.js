import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducers";
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composerenhancer =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//     : compose;

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

// const store = createStore(reducer, composerenhancer(applyMiddleware(thunk)));

export default store;
