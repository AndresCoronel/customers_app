import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ({ name, editAction, delAction, urlPath, cedula, age }) => {
    return (
        <div className="user">
            <div class="card">

                <div class="links">
                    <ul>
                        <div class="card1">
                            <h2 className="h">{name}</h2>
                            <img class="card-img-top" className="imgn" src="https://adapt.to/content/dam/adaptto/production/teaserbar/user.png/_jcr_content/renditions/original./user.png" alt="Card image cap" />
                            
                            <div class="info-container">
                                <div><h2 class="info">Cedula:</h2></div>
                                <div><h2 class="info">{cedula}</h2></div>
                                <div><h2 class="info">Edad:</h2></div>
                                <div><h2 class="info">{age}</h2></div>
                            </div>
                            
                            <div className="botones">
                                <Link to={`${urlPath}${cedula}/edit`} className="btnAccion">{editAction}</Link>
                                <Link to={`${urlPath}${cedula}/delete`} className="btnAccion">{delAction}</Link>
                            </div>
                                
                        </div>
                        
                    </ul>
                    
                </div>
                


            </div>
        

        </div>
    );
};

CustomerListItem.propTypes = {
    cedula: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;