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
    /*<label htmlFor={name}>{label}</label>*/
    renderField = ({ input, meta, type, label, name, withFocus }) => (
        <div>

            <input className="camposTexto" {...input} type={!type ? "text" : type}
                ref={withFocus && (txt => this.txt = txt)} />
            {
                meta.touched && <span>{meta.error}</span>
            }
            <div class="bar"></div>
        </div>

    );

    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div>
                <h2>Edición del cliente</h2>
                <form onSubmit={handleSubmit}>
                    <div class="card">

                        <div class="links">
                            <ul>
                                <div class="card1">
                                    <img class="card-img-top" className="imgn" src="https://adapt.to/content/dam/adaptto/production/teaserbar/user.png/_jcr_content/renditions/original./user.png" alt="Card image cap" />
                                    <div class="info-container">

                                        <div><h2 class="info">Nombre:</h2></div>
                                        <div>
                                            <Field
                                                withFocus
                                                name="name"
                                                component={this.renderField}
                                                label="Nombre: "
                                                parse={toUpper}
                                                format={toLower} >
                                            </Field>
                                        </div>

                                        <div><h2 class="info">Cédula:</h2></div>
                                        <div>
                                            <Field
                                                name="cedula"
                                                component={this.renderField}
                                                label="Cédula: "
                                                validate={isNumber}>
                                            </Field>
                                        </div>

                                        <div><h2 class="info">Edad:</h2></div>
                                        <div>
                                            <Field
                                                name="age"
                                                component={this.renderField}
                                                type="number"
                                                validate={isNumber}
                                                parse={toNumber}
                                                normalize={onlyGrow}>
                                            </Field>
                                        </div>
                                        
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                          <CustomersActions>
                        <button type="submit" disabled={pristine || submitting}>
                            Aceptar
                        </button>
                        <button type="button" disabled={submitting} onClick={onBack}>
                            Volver
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

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(CustomerEditForm));