import React from 'react';
import OP from './OP';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/index';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

const logger = createLogger();
let store;
if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(logger, thunk),
    )
  );
} else {
  store = createStore(
    rootReducer,
    compose(applyMiddleware(logger, thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错    
  );
}

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <OP />
      </Provider>
    );
  }
}

/*
import React, { Component } from 'react';
import './App.css';
import OP from './OP';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OP />
      </div>
    );
  }
}
*/

