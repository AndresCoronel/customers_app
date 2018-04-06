import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import AppFrame from './../components/AppFrame';
import { getCustomerByCedula } from '../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { fetchCustomers } from "./../actions/customer/fetchCustomers";
import { updateCustomer } from "./../actions/customer/updateCustomer";
import { deleteCustomer } from "./../actions/customer/deleteCustomer";

class CustomerContainer extends Component {

  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }

  handleSubmit = values => {
    console.log(JSON.stringify(values));
    const { id } = values;
    return this.props.updateCustomer(id, values).then(r => {
      if (r.error) {
        throw new SubmissionError(r.payload);
      }
    });
  }


  handleOnBack = () => {
    this.props.history.goBack();
  }

  handleOnSubmitSucces = () => {
    this.props.history.goBack();
  }

  handleOnDelete = id => {
    console.log("eliminando");
    this.props.deleteCustomer(id).then(v =>{
      this.props.history.goBack();
    } ) ;
  }

  renderCustomerControl = (isEdit, isDelete) => {
    if (this.props.customer) {
      const CustomerControl = isEdit ? CustomerEdit : CustomerData;
      return <CustomerControl {...this.props.customer}
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSuccess}
        onBack={this.handleOnBack}
        isDeleteAllow={!!isDelete}
        onDelete={this.handleOnDelete} />
    }

    return null;
  }

  renderBody = () => (
    <Route path="/customers/:cedula/edit" children={
      ({ match: isEdit }) => (
        <Route path="/customers/:cedula/delete" children={
          ({ match: isDelete }) => (
            this.renderCustomerControl(isEdit, isDelete))
        } />)
    } />
  )
  //<p>Datos del Usuario: "{this.props.customer.name}" </p>
  render() {
    return (
      <div>
        <AppFrame header={`Usuario: ${this.props.cedula} `}
          body={this.renderBody()} >
        </AppFrame>
      </div>
    )
  }
}
CustomerContainer.propTypes = {
  cedula: PropTypes.string.isRequired,
  customer: PropTypes.object,
  fetchCustomers: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,

}
const mapStateToProps = (state, props) => ({
  customer: getCustomerByCedula(state, props)
});

export default withRouter(connect(mapStateToProps, {
  fetchCustomers,
  updateCustomer,
  deleteCustomer
})(CustomerContainer));