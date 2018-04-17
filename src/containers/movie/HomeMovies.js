import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import AppFrame from './../../components/AppFrame';
import MoviesListHome from './../../components/movie/MoviesListHome';
import MoviesActions from './../../components/movie/MoviesActions';
import { fetchMovies } from './../../actions/movie/fetchMovies';
import { getMovies } from './../../selectors/movies';
import CustomersActions from '../../components/CustomersActions';
import './../../style/styleMovie.css';
const $ = require('jquery');

class HomeMovies extends Component {

    componentDidMount() {
        console.log("en el didMount")
        this.props.fetchMovies();
    }
    handleOnClickLogin = () => {
        console.log("handleOn Click");
        this.props.history.push('/login');
    }

    renderBody = movies => (
       
            <div className="divHome">
                <MoviesListHome
                    movies={movies}
                    urlPath={'movies/'}>
                </MoviesListHome>
                <button className="botonesActions" onClick={this.handleOnClickLogin}>Ingresar</button>
                <hr />
        </div>

    )

    render() {
        $(document).ready(function () {

            $(".item").on("click", function () {
                $(this).next("div").slideToggle(100);

                $(".links").not($(this).next()).slideUp("fast");

            });

        });
        return (
            <div>
                <AppFrame header={'Listado de peliculas'}
                    body={this.renderBody(this.props.movies)}></AppFrame>
            </div>
        )
    }
}
HomeMovies.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,

};

HomeMovies.defaultProps = {
    movies: []
};

const mapStateToProps = state => ({

    movies: getMovies(state)
});




export default withRouter(connect(mapStateToProps, { fetchMovies })(HomeMovies));