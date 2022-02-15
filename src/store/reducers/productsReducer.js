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

/**
 * #initialize products state
 */
const initProductsState = {
    totalItems: 0,
    total_items_message: '',
    total_items_isLoading: true,
    products: [],
    products_message: '',
    products_isLoading: true,
    product: null,
    product_message: '',
    product_isLoading: true,
    create_product_message: '',
    create_product_isLoading: false,
}
/**
 * # updates state based on the response from the server
 */
export const productsReducer = (state=initProductsState, action) => {
    switch(action.type) {
        case CREATE_PRODUCT_ISLOADING:
        case GET_PRODUCTS_ISLOADING:
            return {
                ...state,
                products_isLoading: action.payload
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                products_isLoading: action.payload.isLoading
            }
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                products_message: action.payload.message,
                products_isLoading: action.payload.isLoading
            }
        case GET_PRODUCTS_TOTAL_ISLOADING:
            return {
                ...state,
                total_items_isLoading: action.payload
            }
        case GET_PRODUCTS_TOTAL_SUCCESS:
            return {
                ...state,
                totalItems: action.payload.totalItems,
                total_items_isLoading: action.payload.isLoading
            }
        case GET_PRODUCTS_TOTAL_FAILURE:
            return {
                ...state,
                total_items_message: action.payload.message,
                total_items_isLoading: action.payload.isLoading
            }
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                create_products_message: action.payload.message,
                create_products_isLoading: action.payload.isLoading
            }
        case CREATE_PRODUCT_FAILURE:
            return {
                ...state,
                create_products_message: action.payload.message,
                create_products_isLoading: action.payload.isLoading
            }
        case CLEAR_MESSAGES:
            return {
                ...state,
                products_message: '',
                products_isLoading: false
            }
        default:
            return state;
    }
}
