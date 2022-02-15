//npm imports
import axios from 'axios';

//local imports
import {
    CLEAR_MESSAGES,
    CREATE_PRODUCT_FAILURE,
    CREATE_PRODUCT_SUCCESS, 
    CREATE_PRODUCT_ISLOADING,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_ISLOADING,
    GET_PRODUCTS_TOTAL_FAILURE,
    GET_PRODUCTS_TOTAL_SUCCESS, 
    GET_PRODUCTS_TOTAL_ISLOADING
} from '../types/productTypes';

//the server url stored in .env
const PORT = process.env.REACT_APP_BASE_URL;

//gets all products
export const fetchProductsAction = (values) => {
    
    return async dispatch => {
        try {
            dispatch({ type: GET_PRODUCTS_ISLOADING, payload: true });

            const res = await axios.get(`${PORT}/products`, values);

            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: { products: res.data.products, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: GET_PRODUCTS_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }

            dispatch({ type: GET_PRODUCTS_FAILURE, payload: { message: 'Unable to GET products', isLoading: false } });
        }
    }
}


/**
 * # gets products total products
 * # if request is successful:- dispatch products count to the reducer
 * # if request failed:- dispatch error message to the reducer
 * # activates loading spinner while waiting for response
 * # uses axios to do a get request to the node server
 */
 export const getProductsTotalAction = () => {
    
    return async dispatch => {
        try {
            dispatch({ type: GET_PRODUCTS_TOTAL_ISLOADING, payload: true });

            const res = await axios.get(`${PORT}/products/total`);

            dispatch({ type: GET_PRODUCTS_TOTAL_SUCCESS, payload: { totalItems: res.data.totalItems, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: GET_PRODUCTS_TOTAL_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }

            dispatch({ type: GET_PRODUCTS_TOTAL_FAILURE, payload: { message: 'Unable to GET products count', isLoading: false } });
        }
    }
}

 export const createProductAction = formValues => {
    return async dispatch => {
        try {
            dispatch({ type: CREATE_PRODUCT_ISLOADING, payload: true });

            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const r = await axios.post(`${PORT}/products/create`, formValues, config);

            console.log(r)

            dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: { message: r.data.message, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: CREATE_PRODUCT_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: CREATE_PRODUCT_FAILURE, payload: { message: 'Failed to create product. Please try again later ', isLoading: false } });
        }
    }
}

/**
 * CLEAR SUCCESS AND ERROR MESSAGES
 */
 export const clearMessagesAction = () => dispatch => dispatch({ type: CLEAR_MESSAGES });
