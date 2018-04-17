import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './../../style/styleMovie.css';

const MovieListItemHome = ({ nombre, descripcion, duracion, editAction, delAction, urlPath, id }) => {
    const imageUrl = require(`./${nombre}.png`);
    return (
            <div className="ali">
                <div class="card">
                    <div class="tooltip" style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div className="botonViewMovie">
                            <Link to={`${id}/view`}>View</Link>
                        </div>
                        <span class="tiptext">
                            <h2 className="h1">{nombre}</h2>
                            <div><strong>Nombre: </strong><i>{nombre}</i></div>
                            <div><strong>Descripcion: </strong><i>{descripcion}</i></div>
                            <div><strong>duracion: </strong><i>{duracion}</i></div>

                        </span>
                    </div>
                </div>
            </div >
    );
};

MovieListItemHome.propTypes = {
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    reparto: PropTypes.string.isRequired,
    duracion: PropTypes.number,
    paisOrigen: PropTypes.string.isRequired,
    fechaEstreno: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default MovieListItemHome;