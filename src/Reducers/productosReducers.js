import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  OBTENER_PRODUCTO,
  OBTENER_PRODUCTO_EXITO,
  OBTENER_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  OBTENER_PRODUCTO_ELIMINAR_ERROR,
  OBTENER_PRODUCTO_ELIMINAR_EXITO,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO_EXITO,
} from "../types";

// cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_PRODUCTO:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };
    case OBTENER_PRODUCTO_ELIMINAR_ERROR:
    case OBTENER_PRODUCTO_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OBTENER_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      };
    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        loading: true,
        productoEliminar: action.payload,
      };
    case OBTENER_PRODUCTO_ELIMINAR_EXITO:
      return {
        ...state,
        loading: false,
        productos: state.productos.filter(
          (productos) => productos !== state.productoEliminar
        ),
        productoEliminar: null,
      };
    case EDITAR_PRODUCTO:
      return {
        ...state,
        loading: true,
        productoEditar: action.payload,
      };
    case EDITAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: state.productos.map((e) =>
          e.id !== state.productoEditar ? e : action.payload
        ),
        productoEditar: null,
      };
    case EDITAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        productoEditar: null,
      };
    default:
      return state;
  }
}
