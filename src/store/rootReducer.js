//npm packages
import { combineReducers } from 'redux';

//local imports
import { usersReducer } from './reducers/usersReducer';
import { cartReducer } from './reducers/cartReducer';
import { authReducer } from './reducers/authReducer';
import { productsReducer } from './reducers/productsReducer';
import { categoriesReducer } from './reducers/categoriesReducer';


/**
 * #COMBINING ALL REDUCERS INTO A SINGLE REDUCER
 */
export const rootReducer = combineReducers({
    users: usersReducer,
    cart: cartReducer,
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer
});