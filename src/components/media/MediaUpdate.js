import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import { getMediasForId, updateMedias } from '../../services/mediaService'; 
import { getDirectors } from '../../services/directorService';
import { getTipos } from '../../services/tipoService'
import { getGeneros } from '../../services/generoService';
import { getProductoras } from '../../services/productoraService';
import Swal from 'sweetalert2';


export const MediaUpdate = () => {

  const { mediaId = ''} = useParams();
  const [ media, setMedia] = useState();
  const [ directors, setDirectors ] = useState([]);
  const [ productoras, setProductoras ] = useState([]);
  const [ tipos, setTipos ] = useState([]);
  const [ generos, setGeneros ] = useState([]);

  const [ valoresForm, setValoresForm ] = useState({});
  const { serial = '', titulo = '', sinopsis = '', url_pelicula = '', image = '', 
    fecha_creacion = '', fecha_actualizacion = '', anio_estreno = '', genero, director, productora, tipo } = valoresForm

    const listDirectors = async () => {
      try {
        const { data } = await getDirectors();
        setDirectors(data);
  
      } catch (error){
        console.log(error);
        
      }
    }
  
    useEffect(() => {
      listDirectors();
    }, []);
  
  
    const listProductoras = async () => {
      try {
        const { data } = await getProductoras();
        setProductoras(data);
  
      } catch (error){
        console.log(error);
        
      }
    }
  
    useEffect(() => {
      listProductoras();
    }, []);
  
  
    const listTipos = async () => {
      try {
        const { data } = await getTipos();
        setTipos(data);
  
      } catch (error){
        console.log(error);
        
      }
    }
  
    useEffect(() => {
      listTipos();
    }, []);
  
  
  
    const listGeneros = async () => {
      try {
        const { data } = await getGeneros();
        setGeneros(data);
  
      } catch (error){
        console.log(error);
        
      }
    }
  
    useEffect(() => {
      listGeneros();
    }, []);
  
  
    const getMedias = async () => {
    try {
      const { data } = await getMediasForId(mediaId);
      console.log(data);
      
      setMedia(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMedias();
  }, [mediaId]);


  useEffect(() => {
    if (media) {
      setValoresForm({
        serial: media.serial,
        titulo: media.titulo,
        sinopsis: media.sinopsis,
        url_pelicula: media.url_pelicula,
        image: media.image,
        fecha_creacion: media.fecha_creacion,
        fecha_actualizacion: media.fecha_actualizacion,
        anio_estreno: media.anio_estreno,
        genero: media.genero,
        director: media.director,
        productora: media.productora, 
        tipo: media.tipo
      });
    }
  }, [media]);


    
  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  }  

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const media = {
      serial, titulo, sinopsis, url_pelicula, image, fecha_creacion, 
      fecha_actualizacion, anio_estreno,
      genero: {
        _id: genero
      },
      director: {
        _id: director
      },
      productora: {
        _id: productora
      },
      tipo: {
        _id: tipo
      }
    }
    console.log(media);

    try {

      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargado...'
      });
      Swal.showLoading();
      const { data } = await updateMedias(mediaId, media);
      Swal.close();

    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }



  return (
    <div className='container-fluid mt-3 mb-2'>
    <div className='card'>
      <div className='card-header'>
        <h5 className='card-title'>Detalle Producto</h5>
      </div>
      <div className='card-body'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={media?.image} alt="Portada" className="img-fluid" />
          </div>
          <div className='col-md-8'>
            <form onSubmit={(e) => handleOnSubmit(e)}>
              <div className='row'>
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Serial</label>
                    <input type="text" name='serial'
                      value={serial}
                      onChange={e => handleOnChange(e)}
                      required
                      className='form-control' />
                  </div>
                </div>
  
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input type="text" name='titulo'
                      value={titulo}
                      onChange={e => handleOnChange(e)}
                      required
                      className='form-control' />
                  </div>
                </div>
  
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Sinopsis</label>
                    <input type="text" name='sinopsis'
                      value={sinopsis}
                      onChange={e => handleOnChange(e)}
                      required
                      className='form-control' />
                  </div>
                </div>
  
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">URL Película</label>
                    <input type="url" name='url_pelicula'
                      value={url_pelicula}
                      onChange={e => handleOnChange(e)}
                      required
                      className='form-control' />
                  </div>
                </div>
              </div>
  
              <div className='row'>
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input type="url" name='image'
                      value={image}
                      onChange={e => handleOnChange(e)}
                      required
                      className='form-control' />
                  </div>
                </div>
  
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Fecha de creación</label>
                    <input type="date" name='fecha_creacion'
                      value={fecha_creacion}
                      onChange={e => handleOnChange(e)}
                      required
                      className='form-control' />
                  </div>
                </div>
  
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Fecha de actualización</label>
                    <input type="date" name='fecha_actualizacion'
                      value={fecha_actualizacion}
                      onChange={e => handleOnChange(e)}
                      required
                      className='form-control' />
                  </div>
                </div>
  
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Año</label>
                    <input type="number" name='anio_estreno'
                      value={anio_estreno}
                      onChange={e => handleOnChange(e)}
                      required
                      className='form-control' />
                  </div>
                </div>
              </div>
  
              <div className='row'>
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Género</label>
                    <select className='form-select'
                      required
                      name='genero'
                      value={genero}
                      onChange={e => handleOnChange(e)}>
                      <option value="">--SELECCIONE--</option>
                      {
                        generos.map(({ _id, name }) => (
                          <option key={_id} value={_id}>{name}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
  
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Productora</label>
                    <select className='form-select'
                      required
                      name='productora'
                      value={productora}
                      onChange={e => handleOnChange(e)}>
                      <option value="">--SELECCIONE--</option>
                      {
                        productoras.map(({ _id, name }) => (
                          <option key={_id} value={_id}>{name}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
  
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Director</label>
                    <select className='form-select'
                      required
                      name='director'
                      value={director}
                      onChange={e => handleOnChange(e)}>
                      <option value="">--SELECCIONE--</option>
                      {
                        directors.map(({ _id, name }) => (
                          <option key={_id} value={_id}>{name}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
  
                <div className='col'>
                  <div className="mb-3">
                    <label className="form-label">Tipo</label>
                    <select className='form-select'
                      required
                      name='tipo'
                      value={tipo}
                      onChange={e => handleOnChange(e)}>
                      <option value="">--SELECCIONE--</option>
                      {
                        tipos.map(({ _id, name }) => (
                          <option key={_id} value={_id}>{name}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
              </div>
  
              <div className='row'>
                <div className='col'>
                  <button className="btn btn-primary">Guardar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

        )
    }