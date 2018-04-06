import { createSelector } from 'reselect'

export const getMovies = state => state.movies;

export const getMovieById = createSelector (
    (state, props) => state.movies.find(c => c.id === props.id ),
    movie => movie
);