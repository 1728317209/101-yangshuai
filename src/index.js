import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';

const { store, persistor } = configureStore();

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={browserHistory}>
        {AppRoutes()}
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
