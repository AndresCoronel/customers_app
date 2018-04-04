import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame';
import CustomerLogin from '../components/CustomerLogin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { insertCustomer } from "./../actions/insertCustomer";
import { SubmissionError } from 'redux-form';

class Login extends Component {

    handleSubmit = values => {
        return this.props.insertCustomer(values).then(r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    }

    handleSubmitSuccess = () => {
        this.props.history.goBack();
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
                <AppFrame header={`Crear un nuevo usuario`}
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