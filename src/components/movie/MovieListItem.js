import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const MovieListItem = ({ nombre, descripcion, duracion, editAction, delAction, urlPath, id }) => {
    const imageUrl = require(`./123.png`);
    return (
        <div className="ali">
            <div class="card">  
                <div class="tooltip" style={{ backgroundImage: `url(${imageUrl})` }}>

                    <h2 className="h1">{nombre}</h2>

                    <span class="tiptext">
                        <h2>Datos de la pelicula</h2>
                        <div><strong>Nombre: </strong><i>{nombre}</i></div>
                        <div><strong>Sinopsis: </strong><i>{descripcion}</i></div>
                        <div><strong>Duracion: </strong><i>{duracion}</i></div>
                    </span>

                    <div className="botonesMovie">
                        <Link to={`${urlPath}${id}/edit`}>{editAction}</Link>   
                    </div>
                    <div className="botonesMovie">
                    <Link to={`${urlPath}${id}/delete`}>{delAction}</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

MovieListItem.propTypes = {
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    duracion: PropTypes.string.isRequired,
    reparto: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default MovieListItem;