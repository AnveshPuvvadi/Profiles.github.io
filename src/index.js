import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter }  from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import UserReducer from '../src/Store/Reducer/UserReducer'

const Reducer = UserReducer;



const store = createStore(Reducer, compose(applyMiddleware(thunk) ));

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
