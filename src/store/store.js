//npm packages
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

//local imports
import { rootReducer } from './rootReducer';


/**
 * #THUNK IS USED AS A MIDDLEWARE FOR ASYNC ACTIONS
 * #CREATE STORE: CREATES GLOBAL STATE
 */
export const store = createStore(rootReducer, applyMiddleware(thunk));