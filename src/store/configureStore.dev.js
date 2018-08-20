import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/es/storage';
import rootReducer from '../reducers';
import serverApi from '../middleware/serverApi';

const config = {
  key: 'root',
  storage
};
const reducer = persistCombineReducers(config, rootReducer);

const configureStore = preloadedState => {
  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunk, serverApi, createLogger())
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
