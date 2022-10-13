import React from 'react'
import {Link} from 'react-router-dom';

//redux 
import {useDispatch} from 'react-redux';
import { eliminarProducto } from '../actions/productoActions';

function Producto({producto}) {
  const {nombre, precio, id} = producto;
  const dispatch = useDispatch();

  const confirmarEliminar = id =>{

    dispatch(eliminarProducto(id));
  }
  return (
    <>
    <tr>
        <td>{nombre}</td>
        <td><span className='font-weight-bold'>${precio}</span></td>
        <td className="acciones"><Link to={`/productos/editar/${id}`} className ="btn btn-primary mr-2">Editar</Link>
        <button type = "button" className='btn btn-danger' onClick={()=> confirmarEliminar(id)}>Eliminar</button></td>
    </tr>
    </>
  )
}

export default Producto