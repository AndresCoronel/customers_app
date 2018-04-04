import { handleActions } from "redux-actions";
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from "./../constants/index";

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMER]: (state, action) => {
        const customerPayload = action.payload;
        const { id } = customerPayload;
        const customers = state;
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

        const newCustomers = customers.reduce((acc, customer) => {
            if (customer.id === id) {
                return [...acc, customerPayload];
            } else {
                return [...acc, customer];
            }
        }, initialValue)
        return newCustomers;
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload)
}, []);
