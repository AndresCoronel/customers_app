 import { createSelector } from 'reselect'

export const getCustomers = state => state.customers;

export const getCustomerByCedula = createSelector (
    (state, props) => state.customers.find(c => c.cedula === props.cedula ),
    customer => customer
);