import React, { useState } from "react";

//redux
import { crearNuevoProductoAction } from "../actions/productoActions";
import { useDispatch, useSelector } from "react-redux";

function NuevoProducto() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  // usando el dispatch
  const dispatch = useDispatch;

  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));
  const submitNuevoProducto = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }
    agregarProducto({ nombre, precio });
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Agregar Nuevo Producto
              </h2>
              <form onSubmit={submitNuevoProducto}>
                <div className="form-group">
                  <lable>Nombre Producto</lable>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <lable>Precio Producto</lable>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name={precio}
                    onChange={(e) => setPrecio(Number(e.target.value))}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Agregar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NuevoProducto;
