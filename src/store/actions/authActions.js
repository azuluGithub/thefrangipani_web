//npm packages
import axios from 'axios';

//local imports
import {
    SIGNUP_ISLOADING,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    CLEAR_MESSAGES,
    SIGNIN_ISLOADING,
    SIGNIN_SUCCESS,
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

/**
 * SERVER PORT STORED AS ENV VARIBLE
 */
const port = process.env.REACT_APP_BASE_URL;

/**
 * # creates a new user
 */
export const signUpAction = signUpValues => {
    return async dispatch => {
        try {
            dispatch({ type: SIGNUP_ISLOADING, payload: true });

            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const res = await axios.post(`${port}/auth/signup`, signUpValues, config);

            dispatch({ type: SIGNUP_SUCCESS, payload: { message: res.data.message, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: SIGNUP_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: SIGNUP_FAILURE, payload: { message: 'Failed to create account. Please try again later ', isLoading: false } });
        }
    }
}

/**
 * #API-KEY OBTAINED DURING LOG IN IS SAVE ON BROWSER
 */
const saveDataInSession = (token, user) => {
    window.sessionStorage.setItem("token", token);
    window.sessionStorage.setItem("user", JSON.stringify(user));
}


/**
 * # logs in registered user
 */

export const signInAction = signInValues => {
    return async dispatch => {
        try {
            dispatch({ type: SIGNIN_ISLOADING, payload: true });

            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const res = await axios.post(`${port}/auth/signin`, signInValues, config);
        
            saveDataInSession(res.data.token, res.data.user);

            dispatch({ type: SIGNIN_SUCCESS, payload: { isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: SIGNIN_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
        
            dispatch({ type: SIGNIN_FAILURE, payload: { message: 'Unable to log in. Please try again later', isLoading: false }});
        }
    }
}

/**
 * # verifies user account
 */
 export const verifyTokenAction = secretToken => {

    return async dispatch => {
        try {
            dispatch({ type: VERIFY_ISLOADING, payload: true });

            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const res = await axios.put(`${port}/auth/verifyaccount`, secretToken, config);

            dispatch({ type: VERIFY_SUCCESS, payload: { message: res.data.message, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: VERIFY_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: VERIFY_FAILURE, payload: { message: 'Failed to verify account. Please try again later ', isLoading: false } });
        }
    }
}

/**
 * # sends an email to the server for the password to be reseted
 */
 export const forgotAction = email => {

    return async dispatch => {
        try {
            dispatch({ type: FORGOT_ISLOADING, payload: true });

            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const res = await axios.post(`${port}/auth/forgotpassword`, email, config);

            dispatch({ type: FORGOT_SUCCESS, payload: { message: res.data.message, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: FORGOT_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: FORGOT_FAILURE, payload: { message: 'Please try again later ', isLoading: false } });
        }
    }
}

/**
 * # sends an email to the server for the password to be reseted
 */
 export const resetAction = ({ password, cpassword, resettoken }) => {

    return async dispatch => {
        try {
            dispatch({ type: RESET_ISLOADING, payload: true });

            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const res = await axios.put(`${port}/auth/resetpassword/${resettoken}`, { password, cpassword }, config);

            dispatch({ type: RESET_SUCCESS, payload: { message: res.data.message, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: RESET_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: RESET_FAILURE, payload: { message: 'Please try again later ', isLoading: false } });
        }
    }
}

/**
 * CLEAR SUCCESS AND ERROR MESSAGES
 */
export const clearMessagesAction = () => dispatch => dispatch({ type: CLEAR_MESSAGES });

