import {createBrowserHistory} from 'history';
import React, {useEffect} from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from "../store/configureStore";

const history = createBrowserHistory();
const store = configureStore({history});

const AppWrapper = ({children}) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);

export default AppWrapper;

export const useInjectSaga = (key, saga, ...args) => {
  useEffect(() => {
    store.injectSaga(key, saga, ...args);

    return () => {
      store.ejectSaga(key);
    };
  }, [key, saga]);
};
