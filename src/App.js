import React from 'react';
import OP from './container/OP';
import Profile from './container/Profile';
import ClassDetails from './container/ClassDetails';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import serverApi from './middleware/serverApi';

const logger = createLogger();
let store;
if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, serverApi, logger),//可插拔、顺序
    )
  );
} else {
  store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, serverApi, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错    
  );
}

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        {/* <OP /> */}
        <Profile />
        {/* <ClassDetails /> */}
      </Provider>
    );
  }
}

