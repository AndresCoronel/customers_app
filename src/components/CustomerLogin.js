import React, { Component } from 'react';
import PropTypes from "prop-types";
import { reduxForm, Field } from 'redux-form';
import { connect } from "react-redux";
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_EDIT } from '../constants/permissions';
import { getCustomerByCedula } from '../selectors/customers';
import './../style/styleMovie.css';

/*hacer que un campo sea requerido*/
const isRequired = value => (
    !value && "Este campo es requerido"
);

/*requerir que sea un numero*/
const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);
/*hacer requerido globalmente*/
const validate = (values, cedula) => {

    const error = {};
    if (values.name != "123") {
        error.name = "Usuario Incorrecto";
    }

    if (values.cedula != "123") {
        error.cedula = "Contraseña pailas"
    }

    return error;
}



/*solo Numero*/
const toNumber = value => value && Number(value);
/*Mayusculas*/
const toUpper = value => value && value.toUpperCase();
/*minusculas*/
const toLower = value => value && value.toLowerCase();
/*solo subir valores*/
const onlyGrow = (value, previousValue, values) =>
    value && (!previousValue ? value : (value > previousValue ? value : previousValue));


class CustomerLogin extends Component {

    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }
    }

    /*Mostrar el error del campo*/
    renderField = ({ input, meta, type, label, name, withFocus }) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} type={!type ? "text" : type}
                ref={withFocus && (txt => this.txt = txt)} />
            {
                meta.touched && <span>{meta.error}</span>
            }
        </div>
    );


    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (

            <div>
                <h2>Ingresar</h2>

                <form onSubmit={handleSubmit}>
                    <Field
                        withFocus
                        name="name"
                        component={this.renderField}
                        label="Nombre: *"
                        parse={toUpper}
                        format={toLower} ></Field>

                    <Field name="cedula"
                        component={this.renderField}
                        type="number"
                        validate={isNumber}
                        label="Cedula: *"
                        parse={toNumber}
                        normalize={onlyGrow} ></Field>

                    <div className="alineacionBotones">
                        <button className="botonesActions" type="submit" disabled={pristine || submitting}>
                            Aceptar
                        </button>

                        <button className="botonesActions" type="button" disabled={submitting} onClick={onBack}>
                            Cancelar
                        </button>
                    </div>
                   
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Exitoso"></Prompt>
                </form>
            </div>
        );
    };
}

CustomerLogin.propTypes = {
    name: PropTypes.string,
    cedula: PropTypes.string,
    onBack: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
    customer: PropTypes.object,
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByCedula(state, props)
});

const CustomerLoginForm = reduxForm(
    {
        form: 'CustomerLogin',
        validate
    })(CustomerLogin);

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(CustomerLoginForm));