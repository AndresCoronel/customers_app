import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';
import { MOVIE_LIST } from './../../constants/permissions';
import { accessControl } from './../../helpers/accessControl';

const MoviesList = ({ movies, urlPath }) => {
    return (
        <div className="movies-list">
            {
                movies.map( c => 
                    <MovieListItem
                        key={c.id}
                        id={c.id}
                        nombre={c.nombre}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={urlPath}>
                    </MovieListItem>)
            }
        </div>          
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([MOVIE_LIST])( MoviesList);