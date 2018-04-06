import React, { Component } from 'react';
import PropTypes from "prop-types";
import { reduxForm, Field } from 'redux-form';
import { connect } from "react-redux";
import { setPropsAsInitial } from './../../helpers/setPropsAsInitial';
import MoviesActions from './MoviesActions';
import { Prompt } from 'react-router-dom';
import { accessControl } from './../../helpers/accessControl';
import { MOVIE_EDIT } from './../../constants/permissions';

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
    if (!values.nombre) {
        error.nombre = "El campo nombre es requerido"
    }
    if (!values.id) {
        error.id = "El campo id es requerido"
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


class MovieEdit extends Component {
    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }
    }

    /*Mostrar el error del campo*/
    renderField = ({ input, meta, type, label, nombre, withFocus }) => (
        <div>
            <label htmlFor={nombre}>{label}</label>
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
                <h2>Edición de la pelicula</h2>
                <form onSubmit={handleSubmit}>
                    <Field
                        withFocus
                        name="nombre"
                        component={this.renderField}
                        label="Nombre"
                        parse={toUpper}
                        format={toLower} ></Field>

                    <Field
                        name="descripcion"
                        component={this.renderField}
                        label="Descripcion"
                        parse={toUpper}
                        format={toLower} ></Field>

                    <Field
                        name="reparto"
                        component={this.renderField}
                        label="Reparto"
                        parse={toUpper}
                        format={toLower} ></Field>

                    <Field
                        name="director"
                        component={this.renderField}
                        label="Director"
                        parse={toUpper}
                        format={toLower} ></Field>

                    <Field
                        name="paisOrigen"
                        component={this.renderField}
                        label="Pais origen"
                        parse={toUpper}
                        format={toLower} ></Field>

                    <Field
                        name="fechaEstreno"
                        component={this.renderField}
                        label="Fecha de estreno"
                        parse={toUpper}
                        format={toLower} ></Field>

                    <Field
                        name="id"
                        component={this.renderField}
                        label="id"></Field>

                    <Field name="duracion"
                        component={this.renderField}
                        type="number"
                        validate={isNumber}
                        label="duracion"
                        parse={toNumber}
                        normalize={onlyGrow} ></Field>
                    <MoviesActions>
                        <button type="submit" disabled={pristine || submitting}>
                            Aceptar
                        </button>
                        <button type="button" disabled={submitting} onClick={onBack}>
                            Cancelar
                        </button>
                    </MoviesActions>
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderán los datos si continúa"></Prompt>
                </form>
            </div>
        );
    };
}

MovieEdit.propTypes = {
    nombre: PropTypes.string,
    id: PropTypes.string,
    duracion: PropTypes.number,
    descripcion: PropTypes.string,
    reparto: PropTypes.string,
    paisOrigen: PropTypes.string,
    fechaEstreno: PropTypes.string,
    director: PropTypes.string,
    onBack: PropTypes.func.isRequired,
}

const MovieEditForm = reduxForm(
    {
        form: 'MovieEdit',
        validate
    })(MovieEdit);

export default accessControl([MOVIE_EDIT])(setPropsAsInitial(MovieEditForm));