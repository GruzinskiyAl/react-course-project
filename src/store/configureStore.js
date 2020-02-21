import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import productsReducer from "./products/reducer";
import basketReducer from "./basket/reducer";
import filtrationReducer from "./filtration/reducer";
import modalReducer from "./modal/reducer";
import {reducer as formReducer} from "redux-form";
import logger from "redux-logger";

export default function configureStore({history, rootSaga}) {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      history
    }
  });

  const store = createStore(
    combineReducers({
      products: productsReducer,
      basket: basketReducer,
      filtration: filtrationReducer,
      modal: modalReducer,
      form: formReducer
    }),
    // composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  Object.assign(store, createSagaInjector(sagaMiddleware.run, rootSaga));
  return store;
}

function createSagaInjector(runSaga, rootSaga) {
  const injectedSagas = new Map();
  const isInjected = (key) => injectedSagas.has(key);

  const injectSaga = (key, saga, ...args) => {
    if (isInjected(key)) {
      return;
    }
    const task = runSaga(saga, ...args);
    injectedSagas.set(key, task);
  };

  const ejectSaga = (key) => {
    const task = injectedSagas.get(key);
    if (task?.isRunning()) {
      task.cancel();
    }
    injectedSagas.delete(key);
  };

  if (rootSaga) {
    injectSaga('root', rootSaga);
  }
  return {injectSaga, ejectSaga};
}
