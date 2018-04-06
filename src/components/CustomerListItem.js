import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ({ name, editAction, delAction, urlPath, cedula }) => {
    return (
        <div className="customers-list-item">
            <div className="field">
                <Link to={`${urlPath}${cedula}`}>{name}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${cedula}/edit`}>{editAction}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${cedula}/delete`}>{delAction}</Link>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    cedula: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;