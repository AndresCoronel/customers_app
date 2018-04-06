import { handleActions } from "redux-actions";
import { FETCH_MOVIES, INSERT_MOVIE, UPDATE_MOVIE, DELETE_MOVIE } from "./../constants/index";

export const movies = handleActions({
    [FETCH_MOVIES]: (state, action) => [...action.payload],
    [INSERT_MOVIE]: (state, action) => [...state, action.payload],
    [UPDATE_MOVIE]: (state, action) => {
        const moviePayload = action.payload;
        const { id } = moviePayload;
        const movies = state;
        const initialValue = [];
        //primera iteracion
        //acc= acumulado =>[]
        //{id: 1, nam3:'' ....}
        //[{id: 1, nam3:'' ....}]

        //segunda iteracion
        //acc= acumulado =>[{id: 1, nam3:'' ....}]
        //{id: 2, nam3:'viejo' ....}=>{id: 2, nam3:'nuevo' ....}
        //[{id: 1, nam3:'' ....},{id: 2, nam3:'nuevo' ....}]

        //tercera iteracion
        //acc= acumulado =>[{id: 1, nam3:'' ....},{id: 2, nam3:'nuevo' ....}]

        const newMovies = movies.reduce((acc, movie) => {
            if (movie.id === id) {
                return [...acc, moviePayload];
            } else {
                return [...acc, movie];
            }
        }, initialValue)
        return newMovies;
    },
    [DELETE_MOVIE]: (state, action) => state.filter(c => c.id !== action.payload)
}, []);
