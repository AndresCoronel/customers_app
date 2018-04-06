import React from 'react';
import PropTypes from "prop-types";

const MoviesActions = ({children}) => {
    return (
        <div>
            <div className="movies-actions">
            <div>{children} </div>
            </div>
        </div>
    )
};
MoviesActions.propTypes = {
    children: PropTypes.node.isRequired
}
export default MoviesActions;