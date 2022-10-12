import React, { useState } from "react";

//redux
import { crearNuevoProductoAction } from "../actions/productoActions";
import { useDispatch } from "react-redux";

function NuevoProducto() {
  const [nombre, setNombre] = useState(""); // nombre del producto que se va a añadir
  const [precio, setPrecio] = useState(0); // precio del producto que se va a añdir

  // usando el dispatch funcion
  const dispatch = useDispatch();

  //llamar el dispatch de el state en este caso agregar producto
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  const submitNuevoProducto = (e) => {
    e.preventDefault();
    // valida que los datos no sean  nulos
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }
    // agrega el producto a la api y al estado
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
                  <label>Nombre Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Precio Producto</label>
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
