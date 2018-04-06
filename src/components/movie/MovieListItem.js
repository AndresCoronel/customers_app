import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieListItem = ({ nombre, editAction, delAction, urlPath, id }) => {
    return (
        <div className="movies-list-item">
            <div className="field">
                <Link to={`${urlPath}${id}`}>{nombre}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${id}/edit`}>{editAction}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${id}/delete`}>{delAction}</Link>
            </div>
        </div>
    );
};

MovieListItem.propTypes = {
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default MovieListItem;