import React, { useEffect } from "react";

//redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from "../actions/productoActions";
import Producto from "./Producto";

function Productos() {
  const dispatch = useDispatch();
  const productos = useSelector(state => state.productos.productos);
  useEffect(() => {
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, [])

  
  const error = useSelector(state => state.productos.error)

  return (
    <>
      <h2 className="text-center my-5">Productos</h2>
      {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          { productos.length === 0 ? (<tr><td>No hay productos para mostrar</td><td>No hay productos para mostrar</td><td>No hay productos para mostrar</td></tr> ):
           (productos.map(producto =>(
           <Producto key = {producto.id} producto={producto} />)))}
        </tbody>
      </table>
    </>
  );
}

export default Productos;
