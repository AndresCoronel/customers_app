import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
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
        return <CustomerEdit onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleSubmitSuccess}
            onBack={this.handelOnBack}>
        </CustomerEdit>
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