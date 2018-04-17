import React from 'react';
import PropTypes from 'prop-types';
import MoviesActions from './MoviesActions';
import './../../style/styleMovie.css';

const MovieData = ({
    id, nombre, descripcion, reparto, duracion, paisOrigen, fechaEstreno, director, onBack, isDeleteAllow, onDelete
}) => {

    /*"<div style={{backgroundImage: url(../../public/${imgName})}} />"*/
    const imageUrl = require(`./123.png`);
    return (
        <div>

            <div className="movie-data">

                <div class="card">

                    <div class="tooltip" style={{ backgroundImage: `url(${imageUrl})` }}>

                        <h2 className="h1">{nombre}</h2>
                        <span class="tiptext">
                            <h2>Datos de la pelicula</h2>
                            <div><strong>Nombre: </strong><i>{nombre}</i></div>
                            <div><strong>Descripcion: </strong><i>{descripcion}</i></div>
                            <div><strong>reparto: </strong><i>{reparto}</i></div>
                            <div><strong>duracion: </strong><i>{duracion}</i></div>
                            <div><strong>paisOrigen: </strong><i>{paisOrigen}</i></div>
                            <div><strong>fechaEstreno: </strong><i>{fechaEstreno}</i></div>
                            <div><strong>director: </strong><i>{director}</i></div>
                        </span>
                    </div>
                </div>
            </div>

            <MoviesActions>
                <button onClick={onBack}>Volver</button>
                {isDeleteAllow && <button onClick={() => onDelete(id)}>Eliminar</button>}
            </MoviesActions>
        </div>
    );
};

MovieData.propTypes = {
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    reparto: PropTypes.string.isRequired,
    duracion: PropTypes.number,
    paisOrigen: PropTypes.string.isRequired,
    fechaEstreno: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default MovieData;