//npm imports
import axios from 'axios';

//local imports
import {
    CLEAR_MESSAGES,
    GET_CATEGORIES_FAILURE,
    GET_CATEGORIES_SUCCESS, 
    GET_CATEGORIES_ISLOADING,
    CREATE_CATEGORY_FAILURE,
    CREATE_CATEGORY_SUCCESS, 
    CREATE_CATEGORY_ISLOADING
} from '../types/categoryTypes';

//the server url stored in .env
const port = process.env.REACT_APP_BASE_URL;

/**
 * # gets all categories
 * # if request is successful:- dispatch an array of categories to the reducer
 * # if request failed:- dispatch error message to the reducer
 * # activates loading spinner while waiting for response
 * # uses axios to do a get request to the node server
 */
export const fetchCategoriesAction = () => {
    
    return async dispatch => {
        try {
            dispatch({ type: GET_CATEGORIES_ISLOADING, payload: true });

            const res = await axios.get(`${port}/categories`);

            dispatch({ type: GET_CATEGORIES_SUCCESS, payload: { categories: res.data.categories, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: GET_CATEGORIES_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }

            dispatch({ type: GET_CATEGORIES_FAILURE, payload: { message: 'Unable to GET categories', isLoading: false } });
        }
    }
}


/**
 * # creates a category
 */
 export const createCategoryAction = formValues => {
    return async dispatch => {
        try {
            dispatch({ type: CREATE_CATEGORY_ISLOADING, payload: true });

            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const res = await axios.post(`${port}/categories`, formValues, config);

            dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: { message: res.data.message, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: CREATE_CATEGORY_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: CREATE_CATEGORY_FAILURE, payload: { message: 'Failed to create account. Please try again later ', isLoading: false } });
        }
    }
}

export const clearMessagesAction = () => dispatch => dispatch({ type: CLEAR_MESSAGES });
