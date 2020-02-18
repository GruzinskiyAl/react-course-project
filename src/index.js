import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import './index.css';
import App from './App';

import rootReducer from "./store/reducer";
import * as serviceWorker from './serviceWorker';
import rootSaga from "./store/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
