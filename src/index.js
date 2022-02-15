//npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

//local imports
import App from './App';
import { store } from './store/store';

/**
 * #THIS APP USES REDUX AS A STATE MANAGEMENT SYSTEM
 * #PROVIDER MAKES STATE ACCESSABLE TO ALL COMPONENTS ON THE APP
 */
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
