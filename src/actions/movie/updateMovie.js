import { createAction } from 'redux-actions';
import { UPDATE_MOVIE } from './../../constants/index';
import { apiPut } from './../../api/apiMovie';
import { urlMovies } from './../../api/apiMovie/urls';

export const updateMovie = createAction(UPDATE_MOVIE,
    (id, movie) => apiPut(urlMovies, id, movie)());