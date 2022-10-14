import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editarProductocompleto } from "../actions/productoActions.js";
import clienteAxios from "../config/axios.js";
import { useNavigate } from "react-router-dom";

function EditarProductos() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(null);
  const navigate = useNavigate(); // navigate para redirigir el form

  const dispatch = useDispatch();
  const id = useSelector((state) => state.productos.productoEditar);
  useEffect(() => {
    const cargarProducto = async () => {
      const response = await clienteAxios.get(`/productos/${id}`);
      const data = response.data;
      console.log(data, id);
      setNombre(data.nombre);
      setPrecio(data.precio);
    };
    cargarProducto();
    console.log("aqui esta el nombre");
    console.log(nombre);
  }, []);

  const cambiarProducto = (producto) =>
    dispatch(editarProductocompleto(producto));

  const submitcambiarProducto = (event) => {
    event.preventDefault();
    // valida que los datos no sean  nulos
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }
    // agrega el producto a la api y al estado
    cambiarProducto({ id, nombre, precio });
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Editar Producto
              </h2>
              <form onSubmit={submitcambiarProducto}>
                <div className="form-group">
                  <label>Nombre Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name={nombre}
                    value={nombre}
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
                    value={precio}
                    onChange={(e) => setPrecio(Number(e.target.value))}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditarProductos;
