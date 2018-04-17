import React from 'react';
import PropTypes from 'prop-types';
import MovieListItemHome from './MovieListItemHome';
import { MOVIE_LIST } from './../../constants/permissions';
import { accessControl } from './../../helpers/accessControl';

const MoviesListHome = ({ movies, urlPath }) => {
    return (
        <div className="movies-list">
            <div class="card">
                <div class="container">
                  
                    {
                        movies.map(c =>
                            <MovieListItemHome
                                key={c.id}
                                id={c.id}
                                nombre={c.nombre}
                                descripcion=  {c.descripcion}
                                duracion={c.duracion}
                                reparto={c.reparto}
                                paisOrigen={c.paisOrigen}
                                fechaEstreno={c.fechaEstreno}
                                director={c.director}
                                editAction={'Editar'}
                                delAction={'Eliminar'}
                                urlPath={urlPath}>
                            </MovieListItemHome>)
                           }                    
                </div>

            </div>
        </div>
    );
};

MoviesListHome.propTypes = {
    movies: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([MOVIE_LIST])(MoviesListHome);