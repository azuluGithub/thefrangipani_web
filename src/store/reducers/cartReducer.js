//local imports
import {
    CLEAR_MESSAGES,
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
    ADD_CART_TO_DB_ISLOADING,
    ADD_CART_TO_DB_SUCCESS,
    ADD_CART_TO_DB_FAILURE
} from '../types/cartTypes';

const initCartState = {
    message: '',
    cart: [],
    cartTotal: 0,
    itemsInCart: 0,
    cartTotalPrice: 0,
    add_to_cart_message: '',
    add_to_cart_success_msg: '',
    add_to_cart_isLoading: true,
    get_cart_message: '',
    get_cart_isLoading: true,
    update_cart_message: '',
    update_cart_isLoading: true,
    delete_cart_message: '',
    delete_cart_isLoading: true,
    add_cart_to_db_isLoading: false,
    add_cart_to_db_message: ''
}

const cartInStorage = window.sessionStorage.getItem('cart');
if (cartInStorage) {
    const cart = JSON.parse(cartInStorage);
    initCartState.cart = cart;
}

export const cartReducer = (state=initCartState, action) => {
    switch(action.type) {
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload
            }
            
        case ADD_CART_TO_DB_ISLOADING:
            return {
                ...state,
                add_cart_to_db: action.payload
            }
        case ADD_CART_TO_DB_SUCCESS:
            return {
                ...state,
                add_cart_to_db_message: action.payload.message,
                add_cart_to_db_isLoading: action.payload.isLoading
            }
        case ADD_CART_TO_DB_FAILURE:
            return {
                ...state,
                add_cart_to_db_message: action.payload.message,
                add_cart_to_db_isLoading: action.payload.isLoading
            }

        case GET_CART_ISLOADING:
            return {
                ...state,
                get_cart_isLoading: action.payload
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload.cart,
                cartTotal: action.payload.cartTotal,
                get_cart_isLoading: action.payload.isLoading
            }
        case GET_CART_FAILURE:
            return {
                ...state,
                get_cart_message: action.payload.message,
                get_cart_isLoading: action.payload.isLoading
            }

        case DELETE_CART_ISLOADING:
            return {
                ...state,
                delete_cart_isLoading: action.payload
            }
        case DELETE_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload.cart,
                itemsInCart: action.payload.cart.length,
                delete_cart_isLoading: action.payload.isLoading
            }
        case DELETE_CART_FAILURE:
            return {
                ...state,
                delete_cart_message: action.payload.message,
                delete_cart_isLoading: action.payload.isLoading
            }

        case UPDATE_CART_ISLOADING:
            return {
                ...state,
                update_cart_isLoading: action.payload
            }
        case UPDATE_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload.cart,
                update_cart_isLoading: action.payload.isLoading
            }
        case UPDATE_CART_FAILURE:
            return {
                ...state,
                update_cart_message: action.payload.message,
                update_cart_isLoading: action.payload.isLoading
            }
        case CLEAR_MESSAGES:
            return {
                ...state,
                isLoading: false,
                add_cart_to_db_message: ''
            }
    
        default:
            return state;
    }
}
