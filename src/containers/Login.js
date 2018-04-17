import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame';
import CustomerLogin from '../components/CustomerLogin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { insertCustomer } from "./../actions/customer/insertCustomer";
import { SubmissionError } from 'redux-form';

class Login extends Component {

    handleSubmit = values => {
       if(!values){
        this.props.history.push('/movies');
       }
    }

    handleSubmitSuccess = () => {
        this.props.history.push('/logeado');
    }

    handelOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerLogin onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleSubmitSuccess}
            onBack={this.handelOnBack}>
        </CustomerLogin>
    }

    render() {
        return (
            <div>
                <AppFrame header={`Login`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        )
    }
}


Login.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
}
export default withRouter(connect(null, { insertCustomer })(Login));