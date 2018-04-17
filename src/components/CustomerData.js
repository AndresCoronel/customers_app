import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';
import { CUSTOMER_VIEW } from '../constants/permissions';
import { accessControl } from '../helpers/accessControl';
import './styleCustomer.css';

const CustomerData = ({
    id, name, cedula, age, onBack, isDeleteAllow, onDelete
}) => {
    return (
        <div>
            <div className="customer-data">
                <div class="card">

                    <div class="links">
                        <ul>
                            <div class="card1">
                                <h2 className="h">{name}</h2>
                                <img class="card-img-top" className="imgn" src="https://adapt.to/content/dam/adaptto/production/teaserbar/user.png/_jcr_content/renditions/original./user.png" alt="Card image cap" />
                               
                                <div class="info-container">
                                    <div><h2 class="info">Cedula:</h2></div>
                                    <div><h2 class="info">{cedula}</h2></div>
                                    <div><h3 class="info" >Edad:</h3></div>
                                    <div><h3 class="info" >{age}</h3></div>                                    
                                </div>
                             
                                <p>¿Estas seguro de eliminar este usuario?</p>
                              
                                    {isDeleteAllow && <button className="bt" onClick={() => onDelete(id)}>Si</button>}
                                    <button className="bt" onClick={onBack}>No</button>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>

            <CustomersActions>
                <button onClick={onBack}>Volver</button>
            </CustomersActions>

        </div>

    );
};

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cedula: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default accessControl([CUSTOMER_VIEW])(CustomerData);