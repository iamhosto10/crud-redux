import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
} from "../types";

export function crearNuevoProductoAction(producto) {
  return (dispatch) => {
    dispatch(agregarProducto());
    try {
    } catch (e) {}
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
});
