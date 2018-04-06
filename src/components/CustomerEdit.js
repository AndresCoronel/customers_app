import React, { Component } from 'react';
import PropTypes from "prop-types";
import { reduxForm, Field } from 'redux-form';
import { connect } from "react-redux";
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_EDIT } from '../constants/permissions';

/*hacer que un campo sea requerido*/
const isRequired = value => (
    !value && "Este campo es requerido"
);

/*requerir que sea un numero*/
const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);
/*jacer requerido globalmente*/
const validate = values => {

    const error = {};
    if (!values.name) {
        error.name = "El campo nombre es requerido"
    }
    if (!values.cedula) {
        error.cedula = "El campo cedula es requerido"
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


class CustomerEdit extends Component {
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
                <h2>Edición del cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field
                        withFocus
                        name="name"
                        component={this.renderField}
                        label="Nombre"
                        parse={toUpper}
                        format={toLower} ></Field>
                    <Field
                        name="cedula"
                        component={this.renderField}
                        label="Cedula"></Field>
                    <Field name="age"
                        component={this.renderField}
                        type="number"
                        validate={isNumber}
                        label="Edad"
                        parse={toNumber}
                        normalize={onlyGrow} ></Field>
                    <CustomersActions>
                        <button type="submit" disabled={pristine || submitting}>
                            Aceptar
                        </button>
                        <button type="button" disabled={submitting} onClick={onBack}>
                            Cancelar
                        </button>
                    </CustomersActions>
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderán los datos si continúa"></Prompt>
                </form>
            </div>
        );
    };
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    cedula: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
}

const CustomerEditForm = reduxForm(
    {
        form: 'CustomerEdit',
        validate
    })(CustomerEdit);

export default accessControl([CUSTOMER_EDIT]) (setPropsAsInitial(CustomerEditForm));