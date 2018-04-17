import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import AppFrame from '../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from './../components/CustomersActions';
import { fetchCustomers } from './../actions/customer/fetchCustomers';
import { getCustomers } from '../selectors/customers';


class CustomersContainer extends Component {

    componentDidMount() {
        console.log("en el didMount")
        this.props.fetchCustomers();
    }

    handleAddNew = () => {
        this.props.history.push('/customers/new')
    }
    onBack = () => {
        console.log("handleOn Click");
        this.props.history.push('/logeado');
    }
    renderBody = customers => (
        <div>
            <CustomersList
                customers={customers}
                urlPath={'customers/'}>
            </CustomersList>

            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Usuario</button>
                <button onClick={this.onBack}>Volver</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame header={'Listado de usuarios'}
                    body={this.renderBody(this.props.customers)}>
                </AppFrame>
            </div>
        )
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,

};

CustomersContainer.defaultProps = {
    customers: []
};

const mapStateToProps = state => ({

    customers: getCustomers(state)
});




export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));