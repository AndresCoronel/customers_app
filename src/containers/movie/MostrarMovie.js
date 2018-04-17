import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import AppFrame from './../../components/AppFrame';
import { getMovieById } from './../../selectors/movies';
import { Route, withRouter } from 'react-router-dom';
import MovieEdit from './../../components/movie/MovieEdit';
import MovieData from './../../components/movie/MovieData';
import { fetchMovies } from "./../../actions/movie/fetchMovies";
import { updateMovie } from "./../../actions/movie/updateMovie";
import { deleteMovie } from "./../../actions/movie/deleteMovie";
import PerfilMovie from '../../components/movie/PerfilMovie';

class MovieContainer extends Component {

  componentDidMount() {
    if (!this.props.movie) {
      this.props.fetchMovies();
    }
  }

  handleOnBack = () => {
    this.props.history.goBack();
  }

  handleOnSubmitSucces = () => {
    this.props.history.goBack();
  }


  renderMovieControl = (isEdit, isView) => {
    if (this.props.movie) {
      const MovieControl = isView ? PerfilMovie : MovieEdit;
      return <MovieControl {...this.props.movie}
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSuccess}
        onBack={this.handleOnBack} />
    }

    return null;
  }

  renderBody = () => (
    <Route path="/:id/view" children={
      ({ match: isView }) => (
        <Route path="/movies/:id/edit" children={
          ({ match: isEdit }) => (
            this.renderMovieControl(isEdit, isView))
        } />)
    } />
  )
  //<p>Datos del Usuario: "{this.props.movie.nombre}" </p>
  render() {
    return (
      <div>
        <AppFrame body={this.renderBody()}>
        </AppFrame>
      </div>
    )
  }
}
MovieContainer.propTypes = {
  id: PropTypes.string.isRequired,
  movie: PropTypes.object,
  fetchMovies: PropTypes.func.isRequired,
  updateMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,

}
const mapStateToProps = (state, props) => ({
  movie: getMovieById(state, props)
});

export default withRouter(connect(mapStateToProps, {
  fetchMovies,
  updateMovie,
  deleteMovie
})(MovieContainer));