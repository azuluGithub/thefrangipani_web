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


/**
 * #initialize categories state
 */
const initCategoriesState = {
    categories: [],
    categories_message: '',
    categories_isLoading: true
}
/**
 * #updates state based on the response from the server
 */
export const categoriesReducer = (state=initCategoriesState, action) => {
    switch(action.type) {
        //on loading: update loading property accordingly
        case CREATE_CATEGORY_ISLOADING:
        case GET_CATEGORIES_ISLOADING:
            return {
                ...state,
                categories_isLoading: action.payload
            }
        //on success and verify change update  message and loading values
        case CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                categories_isLoading: action.payload.isLoading
            }
        case GET_CATEGORIES_SUCCESS:
            //on success: update loading property and set categories
            return {
                ...state,
                categories: action.payload.categories,
                categories_isLoading: action.payload.isLoading
            }
        case CREATE_CATEGORY_FAILURE:
        case GET_CATEGORIES_FAILURE:
            //on get categories failure: update loading and error message
            return {
                ...state,
                categories_message: action.payload.message,
                categories_isLoading: action.payload.isLoading
            }
        case CLEAR_MESSAGES:
            return {
                ...state,
                categories__message: '',
                categories__isLoading: false
            }
        default:
            return state;
    }
}