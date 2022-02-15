//npm packages
import axios from 'axios';

//local imports
import {
    ADD_TO_CART_SUCCESS,
    UPDATE_CART_ISLOADING,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAILURE,
    GET_CART_ISLOADING,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    DELETE_CART_ISLOADING,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAILURE,
    CLEAR_MESSAGES,
    ADD_CART_TO_DB_ISLOADING,
    ADD_CART_TO_DB_SUCCESS,
    ADD_CART_TO_DB_FAILURE
} from '../types/cartTypes';

//the server url stored in .env
const PORT = process.env.REACT_APP_BASE_URL;

export const addToCartAction = cart =>  {
    return (dispatch) => {
        dispatch ({
            type: ADD_TO_CART_SUCCESS,
            payload: cart
        })
    }
}

//_id to be passed as token
export const addCartToDbAction = ({ cart, _id }) => {

    return async dispatch => {
        try {
            dispatch({ type: ADD_CART_TO_DB_ISLOADING, payload: true });

            const res = await axios.post(`${PORT}/cart`, { cart, _id });

            dispatch({ type: ADD_CART_TO_DB_SUCCESS, payload: { message: res.data.message, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: ADD_CART_TO_DB_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }

            dispatch({ type: ADD_CART_TO_DB_FAILURE, payload: { message: 'Failed to add fetch cart', isLoading: false } });
        }
    }
}


export const getCartAction = (_id) => {
    
    return async dispatch => {
        try {
            dispatch({ type: GET_CART_ISLOADING, payload: true });

            const res = await axios.get(`${PORT}/cart/${_id}`);
            dispatch({ type: GET_CART_SUCCESS, payload: { cart: res.data.cart, cartTotal: res.data.cartTotal, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: GET_CART_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }

            dispatch({ type: GET_CART_FAILURE, payload: { message: 'Unable to fetch cart', isLoading: false } });
        }
    }
}

/**
 * # deletes cart
 * # if request successful:- deletes cart
 * # if request failed:- dispatch error message to the reducer
 * # activates loading spinner while waiting for response
 * # uses axios to do a Delete request to the node server
 */
export const deleteCartAction = ( cart_id, cart ) => {
    //grab apiKey from local storage
    const apiKey = window.sessionStorage.getItem("api-key");
    
    return async dispatch => {
        try {
            dispatch({ type: DELETE_CART_ISLOADING, payload: true });

            const config = {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
            /**NB: DELETE CHANGED TO POST INTENTIONALY */
            const body = JSON.stringify(cart);

            const res = await axios.post(`${PORT}/cart/${cart_id}`, body, config);
            dispatch({ type: DELETE_CART_SUCCESS, payload: {  cart: res.data.cart, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: DELETE_CART_FAILURE, payload: e.response.data.message, isLoading: false });
            }
            dispatch({ type: DELETE_CART_FAILURE, payload: 'Unable to delete cart', isLoading: false});
        }
    }
}

/**
 * # updates cart
 * # if request successful:- updates cart
 * # if request failed:- dispatch error message to the reducer
 * # activates loading spinner while waiting for response
 * # uses axios to send cart data to the node server
 */
export const updateCartAction = ({ apiKey, cartUpdateValues, cart_id }) => {
    return async dispatch => {
        try {

            dispatch({ type: UPDATE_CART_ISLOADING, payload: true });

            const config = {
                headers: { 
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
            
            const body = JSON.stringify(cartUpdateValues);

            const res = await axios.put(`${PORT}/cart/${cart_id}`, body, config);
            dispatch({ type: UPDATE_CART_SUCCESS, payload: { cart: res.data.cart, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: UPDATE_CART_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: UPDATE_CART_FAILURE, payload: { message: 'Failed to update cart. Try again later', isLoading: false } });
        }
    }
}

export const clearMessagesAction = () => dispatch => dispatch({ type: CLEAR_MESSAGES });
