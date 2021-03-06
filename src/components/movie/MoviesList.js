import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';
import { MOVIE_LIST } from './../../constants/permissions';
import { accessControl } from './../../helpers/accessControl';

const MoviesList = ({ movies, urlPath }) => {
    return (
        <div className="movies-list">
            <div class="card">
                <div class="container">
                  
                    {
                        movies.map(c =>
                            <MovieListItem
                                key={c.id}
                                id={c.id}
                                nombre={c.nombre}
                                descripcion=  {c.descripcion}
                                duracion={c.duracion}
                                editAction={'Editar'}
                                delAction={'Eliminar'}
                                urlPath={urlPath}>
                            </MovieListItem>)
                    }
                    
                    
                </div>

            </div>
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([MOVIE_LIST])(MoviesList);