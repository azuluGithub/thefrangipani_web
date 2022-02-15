import axios from 'axios';

//local imports
import {
    FETCH_USERS_ISLOADING,
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE,
    FETCH_USER_ISLOADING,
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE
} from '../types/userTypes';

/**
 * SERVER PORT STORED AS ENV VARIBLE
 */
 const port = process.env.REACT_APP_BASE_URL;

/** sends request to server to fetch data.. on success it returns a user */
export const fetchUserAction = _id => {
    return async dispatch => {
        try {
            dispatch({ type: FETCH_USER_ISLOADING, payload: true });

            const res = await axios.get(`${port}/users/${_id}`);

            dispatch({ type: FETCH_USER_SUCCESS, payload: { user: res.data.user, isLoading: false} });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: FETCH_USER_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: FETCH_USER_FAILURE, payload: { message: 'Please try again later', isLoading: false } });
        }
    }
}


/** sends request to server to fetch data.. on success it returns users */
export const fetchUsersAction = token => {
    return async dispatch => {
        try {
            dispatch({ type: FETCH_USERS_ISLOADING, payload: true });

            const config = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
            
            const res = await axios.get(`${port}/users`, config);

            dispatch({ type: FETCH_USERS_SUCCESS, payload: { users: res.data.users, isLoading: false} });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: FETCH_USERS_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: FETCH_USERS_FAILURE, payload: { message: 'Please try again later', isLoading: false } });
        }
    }
}

/** sends request to server to fetch data.. on success it returns users */
export const editUserAction = formValues => {
    return async dispatch => {
        try {
            dispatch({ type: FETCH_USERS_ISLOADING, payload: true });

            const config = {
                headers: { 'Authorization': `Bearer ${formValues.token}` }
            }
            
            const res = await axios.put(`${port}/users/${formValues._id}`, formValues, config);

            dispatch({ type: FETCH_USERS_SUCCESS, payload: { users: res.data.users, isLoading: false} });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: FETCH_USERS_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: FETCH_USERS_FAILURE, payload: { message: 'Please try again later', isLoading: false } });
        }
    }
}