import React, { useState, useEffect }from 'react';
import { createGeneros, getGeneros, updateGeneros } from '../../services/generoService';
import Swal from 'sweetalert2';
const moment = require('moment');

export const GeneroView = () => {
  
  
  const [ valuesForm, setValuesForm ] = useState({});
  const [ generos, setGeneros ] = useState([]);
  const { name = '', state = '', description = '' } = valuesForm;
  const [ generoSelect, setGeneroSelect ] = useState(null);


  const listGeneros = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargado...'
      });
      Swal.showLoading();
      const resp = await getGeneros();
      setGeneros(resp.data);
      Swal.close();
    } catch (error) {
      console.log();
      Swal.close();
    }
  }

  useEffect(() => {
    listGeneros();
  }, [])

  const handleOnChange = (e) => {
    setValuesForm({ ...valuesForm, [e.target.name]: e.target.value });
  }

  const handleCreateGenero = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargado...'
      });
      Swal.showLoading();
      if (generoSelect) {
        await updateGeneros(generoSelect, valuesForm);
        setGeneroSelect(null);
      } else {
        await createGeneros(valuesForm);
      }
      setValuesForm({ name: '', state: '', description: '' });
      listGeneros();
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  const handleUpdateGenero = async (e, genero) => {
    e.preventDefault();
    setValuesForm({ name: genero.name, state: genero.state, description: genero.description});
    setGeneroSelect(genero._id);
  }

  return (
    <div className='container-fluid mt-4'>
      <form onSubmit={(e) => handleCreateGenero(e)} >
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input required name='name' value={name} type="text" className="form-control"
                onChange={(e) => handleOnChange(e)} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Descripcion</label>
              <input required name='name' value={description} type="text" className="form-control"
                onChange={(e) => handleOnChange(e)} />
            </div>
            </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select required name='state' value={state} className="form-select" onChange={(e) => handleOnChange(e)} >
              <option value="">--SELECCIONE--</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mb-3">Guardar</button>
      </form>

      <table className='table'>
      <thead>
          <tr>
            <th scope='row'>#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
            <th scope='col'>Fecha Creación</th>
            <th scope='col'>Fecha Actualización</th>
            <th scope='col'>Descripción</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            generos.length > 0 && generos.map((genero, index) => {
              return (
                <tr key={genero._id}>
                <th scope='row'> {index + 1} </th>
                <td> {genero.name} </td>
                <td> {genero.state} </td>
                <td> {moment(genero.createdAt).format('DD-MM-YYYY HH:mm')} </td>
                <td> {moment(genero.updatedAt).format('DD-MM-YYYY HH:mm')} </td>
                <td> {genero.description} </td>
                <td><button className='btn btn-success btn-sm me-2' onClick={(e) => handleUpdateGenero(e, genero)}>Actualizar</button>
                  <button className='btn btn-danger btn-sm'>Eliminar</button>
                </td>
              </tr>
              );
            })
          }
        </tbody>
      </table>

    </div>
  )
}