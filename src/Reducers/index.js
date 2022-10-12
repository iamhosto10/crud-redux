import { combineReducers } from "redux";
import Productos from "../Components/Productos";
import Productosreducers from "./productosReducers";

export default combineReducers({ productos: Productosreducers });
