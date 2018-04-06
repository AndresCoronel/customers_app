import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import AppFrame from './../../components/AppFrame';
import { getMovieById } from './../../selectors/movies';
import { Route, withRouter } from 'react-router-dom';
import MovieEdit from './../../components/movie/MovieEdit';
import MovieData from './../../components/movie/MovieData';
import { fetchMovies  } from "./../../actions/movie/fetchMovies";
import { updateMovie } from "./../../actions/movie/updateMovie";
import { deleteMovie } from "./../../actions/movie/deleteMovie";

class MovieContainer extends Component {

  componentDidMount() {
    if (!this.props.movie) {
      this.props.fetchMovies();
    }
  }

  handleSubmit = values => {
    console.log(JSON.stringify(values));
    const { id } = values;
    return this.props.updateMovie(id, values).then(r => {
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
    this.props.deleteMovie(id).then(v =>{
      this.props.history.goBack();
    } ) ;
  }

  renderMovieControl = (isEdit, isDelete) => {
    if (this.props.movie) {
      const MovieControl = isEdit ? MovieEdit :MovieData;
      return <MovieControl {...this.props.movie}
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSuccess}
        onBack={this.handleOnBack}
        isDeleteAllow={!!isDelete}
        onDelete={this.handleOnDelete} />
    }

    return null;
  }

  renderBody = () => (
    <Route path="/movies/:id/edit" children={
      ({ match: isEdit }) => (
        <Route path="/movies/:id/delete" children={
          ({ match: isDelete }) => (
            this.renderMovieControl(isEdit, isDelete))
        } />)
    } />
  )
  //<p>Datos del Usuario: "{this.props.movie.nombre}" </p>
  render() {
    return (
      <div>
        <AppFrame header={`Movie: ${this.props.movie.nombre} `}
          body={this.renderBody()} >
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