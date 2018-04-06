import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from './../../components/AppFrame';
import MovieEdit from './../../components/movie/MovieEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { insertMovie } from "./../../actions/movie/insertMovie";
import { SubmissionError } from 'redux-form';

class NewMovieContainer extends Component {

    handleSubmit = values => {
        return this.props.insertMovie(values).then(r => {
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
        return <MovieEdit onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleSubmitSuccess}
            onBack={this.handelOnBack}>
        </MovieEdit>
    }

    render() {
        return (
            <div>
                <AppFrame header={`Crear una nueva pelicula`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        )
    }
}


NewMovieContainer.propTypes = {
    insertMovie: PropTypes.func.isRequired,
}
export default withRouter(connect(null, { insertMovie })(NewMovieContainer));