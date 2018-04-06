import { createAction } from 'redux-actions';
import { INSERT_MOVIE } from './../../constants/index';
import { apiPOST } from './../../api/apiMovie';
import { urlMovies } from './../../api/apiMovie/urls';

export const insertMovie = createAction(INSERT_MOVIE,
    movie => apiPOST(urlMovies, movie)());