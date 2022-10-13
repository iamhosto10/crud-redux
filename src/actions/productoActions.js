import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  OBTENER_PRODUCTO,
  OBTENER_PRODUCTO_EXITO,
  OBTENER_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  OBTENER_PRODUCTO_ELIMINAR_ERROR,
  OBTENER_PRODUCTO_ELIMINAR_EXITO
} from "../types";
import clienteAxios from "../config/axios.js";
import axios from "axios";

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

const obtenerProductoExito = (productos) => ({
  type: OBTENER_PRODUCTO_EXITO,
  payload: productos,
});

const obtenerProductoError = (boolean) => ({
  type: OBTENER_PRODUCTO_ERROR,
  payload: boolean,
});

const eliminarProductobyid = (id) =>({
  type:OBTENER_PRODUCTO_ELIMINAR,
  payload:id,
});

const eliminarProductoExito = () =>({
  type:OBTENER_PRODUCTO_ELIMINAR_EXITO,
});

const eliminarProductoError = (boolean) =>({
  type:OBTENER_PRODUCTO_ELIMINAR_ERROR,
  payload:boolean,

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

//obtener productos para mostrarlos en la tabla
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(obtenerproducto());
    try {
      const response = await clienteAxios.get('/productos');
      dispatch(obtenerProductoExito(response.data));
    } catch (e) {
      dispatch(obtenerProductoError(true));
    }
  };
}

// obtener el producto a eliminar
export function eliminarProducto(id){
  return async (dispatch)=>{
    dispatch(eliminarProductobyid(id));
    try{
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito());
    }catch(e){
      dispatch(eliminarProductoError(true));
    }
  }
}