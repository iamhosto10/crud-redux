import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  OBTENER_PRODUCTO,
  OBTENER_PRODUCTO_EXITO,
  OBTENER_PRODUCTO_ERROR,
} from "../types";
import clienteAxios from "../config/axios.js";

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = (boolean) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: boolean,
});

const obtenerproducto = () => ({
  type: OBTENER_PRODUCTO,
  payload: true,
});

const obtenerProductoExito = () => ({
  type: OBTENER_PRODUCTO_EXITO,
  payload: true,
});

const obtenerProductoError = () => ({
  type: OBTENER_PRODUCTO_ERROR,
  payload: true,
});

export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    console.log(producto);
    dispatch(agregarProducto());
    try {
      await clienteAxios.post("/productos", producto);
      dispatch(agregarProductoExito(producto));
    } catch (e) {
      console.log(e);
      dispatch(agregarProductoError(true));
    }
  };
}

export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(obtenerproducto);
    try {
      dispatch(obtenerProductoExito);
    } catch (e) {
      dispatch(obtenerProductoError);
    }
  };
}
