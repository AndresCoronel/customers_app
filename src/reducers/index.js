import { combineReducers } from "redux";
import { customers } from "./customers";
import { movies } from "./movies";
import { reducer as reduxForm } from "redux-form";
import { CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT } from "../constants/permissions";
import { MOVIE_LIST, MOVIE_VIEW, MOVIE_EDIT } from "../constants/permissions";

const user = (state, action) => ({
    permissions: [CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT, MOVIE_LIST, MOVIE_VIEW, MOVIE_EDIT]
})

export default combineReducers ({
    customers,
    movies,
    form: reduxForm,
    user
})