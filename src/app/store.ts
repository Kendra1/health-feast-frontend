import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './app.reducer';
import { rootSaga } from './app.saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const setUpStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};

let store: Store | null = null;

export const configureStore = (): Store => {
  if (!store) {
    store = setUpStore();
  }
  return store;
};
