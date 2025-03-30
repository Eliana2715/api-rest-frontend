import React from 'react'
import { Link } from 'react-router-dom';

export const MediaCard = (props) => {

    const { media } = props;

  return (
    <div className="col">
        <div className="card">
            <img src={media.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Descripcion</h5>
                <hr/>
                <p className="card-text">{`Serial: ${media.serial}`}</p>
                <p className="card-text">{`Titulo: ${media.titulo}`}</p>
                <p className="card-text">{`Sinopsis: ${media.sinopsis}`}</p>
                <p className="card-text"> Url_pelicula: <a href={media.url_pelicula} target="_blank">Link</a></p>
                <p className="card-text">{`Año: ${media.anio_estreno}`}</p>
                <p className="card-text">{`Genero: ${media.genero?.name }`}</p>
                <p className="card-text">{`Director: ${media.director?.name }`}</p>
                <p className="card-text">{`Productora: ${media.productora?.name_Producer }`}</p>
                <p className="card-text">{`Tipo: ${media.tipo?.name }`}</p>
                <p className="card-text">
                  <Link to = {`/medias/edit/${media._id}`}>Ver mas</Link>
                </p>
            </div>
        </div>
    </div>
  );
};

