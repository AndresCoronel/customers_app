import { createAction } from 'redux-actions';
import {DELETE_MOVIE } from './../../constants/index';
import { apiDelete } from './../../api/apiMovie';
import { urlMovies } from './../../api/apiMovie/urls';

export const deleteMovie = createAction(DELETE_MOVIE,
    (id, movie) => apiDelete(urlMovies, id, movie)());      