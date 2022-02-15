//local imports
import {
    FETCH_USERS_ISLOADING,
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE,
    FETCH_USER_ISLOADING,
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE
} from '../types/userTypes';

const initUsersState = {
    user: null,
    user_isLoading: true,
    user_message: '',
    users: [],
    users_isLoading: true,
    users_message: ''
}

const userInStorage = window.sessionStorage.getItem('user');
if (userInStorage) {
    initUsersState.user = JSON.parse(userInStorage);
}

export const usersReducer = (state=initUsersState, action) => {
    switch(action.type) {
        //on sending request: update loading property accordingly
        case FETCH_USER_ISLOADING:
        case FETCH_USERS_ISLOADING:
            return {
                ...state,
                users_isLoading: action.payload
            }
        //on fetch users success 
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                users_isLoading: action.payload.isLoading
            }
        //on fetch user success 
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                user_isLoading: action.payload.isLoading
            }
        //on fetch users failure
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                users_message: action.payload.message,
                users_isLoading: action.payload.isLoading
            }
        //on fetch users failure
        case FETCH_USER_FAILURE:
            return {
                ...state,
                user_message: action.payload.message,
                user_isLoading: action.payload.isLoading
            }
        default:
            return state;
    }
}

