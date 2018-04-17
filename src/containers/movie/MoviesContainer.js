import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import AppFrame from './../../components/AppFrame';
import MoviesList from './../../components/movie/MoviesList';
import MoviesActions from './../../components/movie/MoviesActions';
import { fetchMovies } from './../../actions/movie/fetchMovies';
import { getMovies } from './../../selectors/movies';


class MoviesContainer extends Component {

    componentDidMount() {
        console.log("en el didMount")
        this.props.fetchMovies();
    }

    handleAddNew = () => {
        this.props.history.push('/movies/new')
    }
    onBack = () => {
        console.log("handleOn Click");
        this.props.history.push('/logeado');
    }
    renderBody = movies => (
        <div>

            <MoviesList
                movies={movies}
                urlPath={'movies/'}>
            </MoviesList>
            <div className="alineacionBotones">
                <button className="botonesActions" onClick={this.handleAddNew}>Agregar</button>
                <button className="botonesActions" onClick={this.onBack}>Volver</button>
            </div>

            

        </div>
    )

    render() {
        return (
            <div>
                <AppFrame header={'Listado de peliculas'}
                    body={this.renderBody(this.props.movies)} ></AppFrame>
            </div>
        )
    }
}

MoviesContainer.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,

};

MoviesContainer.defaultProps = {
    movies: []
};

const mapStateToProps = state => ({

    movies: getMovies(state)
});




export default withRouter(connect(mapStateToProps, { fetchMovies })(MoviesContainer));