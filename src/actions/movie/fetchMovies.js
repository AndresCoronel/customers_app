import { FETCH_MOVIES } from "./../../constants";
import { createAction } from "redux-actions";
import { apiGet } from './../../api/apiMovie';
import { urlMovies } from './../../api/apiMovie/urls';

export const fetchMovies = createAction(FETCH_MOVIES, apiGet(urlMovies));