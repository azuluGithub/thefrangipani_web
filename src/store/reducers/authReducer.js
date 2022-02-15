//local imports
import {
    SIGNUP_ISLOADING,
    SIGNUP_SUCCESS, 
    SIGNUP_FAILURE,
    SIGNIN_ISLOADING, 
    SIGNIN_SUCCESS,
    CLEAR_STATE,
    CLEAR_MESSAGES,
    SIGNIN_FAILURE,
    VERIFY_ISLOADING,
    VERIFY_SUCCESS,
    VERIFY_FAILURE,
    FORGOT_SUCCESS,
    FORGOT_FAILURE,
    FORGOT_ISLOADING,
    RESET_SUCCESS,
    RESET_FAILURE,
    RESET_ISLOADING
} from '../types/authTypes';

const initAuthState = {
    isLoading: false,
    message: ''
}

/**
 * # updates state based on the response from the server
 */
export const authReducer = (state=initAuthState, action) => {
    switch(action.type) {
        //on sign-up, verify and sign-in loading: update loading property accordingly
        case SIGNIN_ISLOADING:
        case SIGNUP_ISLOADING:
        case VERIFY_ISLOADING:
        case FORGOT_ISLOADING:
        case RESET_ISLOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        //on sign-up success and verify change update sign-up message and loading values
        case SIGNUP_SUCCESS:
        case VERIFY_SUCCESS:
        case FORGOT_SUCCESS:
        case RESET_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                isLoading: action.payload.isLoading
            }
        //on sign-in success change update loading value
        case SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        //on sign-up, verify and sign-in failures change state accordingly
        case SIGNUP_FAILURE:
        case SIGNIN_FAILURE:
        case VERIFY_FAILURE:
        case FORGOT_FAILURE:
        case RESET_FAILURE:
            return {
                ...state,
                message: action.payload.message,
                isLoading: action.payload.isLoading
            }
        //clear state when user logs out
        case CLEAR_STATE:
            return {
                isLoading: false,
                message: ''
            }
        //clear all messages when component loads
        case CLEAR_MESSAGES:
            return {
                ...state,
                isLoading: false,
                message: ''
            }
        default:
            return state;
    }
}

