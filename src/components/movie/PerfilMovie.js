import React from 'react';
import PropTypes from 'prop-types';
import MoviesActions from './MoviesActions';
import './../../style/styleMovie.css';

const PerfilMovie = ({
    id, nombre, descripcion, reparto, duracion, paisOrigen, fechaEstreno, director, onBack, isDeleteAllow, onDelete
}) => {
    const imageUrl = require(`./${nombre}.png`);

    /*"<div style={{backgroundImage: url(../../public/${imgName})}} />"*/
    return (

        <div>
            <div className="movie-data">
                <div className="general">

                    <div className="poster">
                        <div className="imagen" style={{ backgroundImage: `url(${imageUrl})` }} />

                        <div className="infoCorta" >
                            <div><h2 class="datos">Duración:</h2></div>
                            <div><h2 class="datos">{duracion}</h2></div>
                            <div><h2 class="datos">Director</h2></div>
                            <div><h2 class="datos">{director}</h2></div>
                            <div><h2 class="datos">País:</h2></div>
                            <div><h2 class="datos">{paisOrigen}</h2></div>
                            <div><h2 class="datos">Género:</h2></div>
                            <div><h2 class="datos"> FaltaAgregar*</h2></div>
                        </div>

                    </div>

                    <div className="in">

                        <div className="titulo">
                            <h2 className="nombreMovie">{nombre} ({fechaEstreno})</h2>
                        </div>

                        <div className="informacionMovie">
                            <h2 className="subtitulo">Sinopsis </h2>
                            <div className="todoSinopsis">

                                <div className="sinopsis"><p>{descripcion}</p></div>
                            </div>

                            <h2 className="subtitulo">reparto: </h2>
                            <div className="todoReparto">
                                <div className="reparto">
                                    <p>{reparto}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </div>

            <MoviesActions>
                <button onClick={onBack}>Volver</button>
            </MoviesActions>
        </div>
    );
};

PerfilMovie.propTypes = {
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

export default PerfilMovie;