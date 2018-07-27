import React from 'react';
import Container from './container/containers'
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

const logger = createLogger();

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(logger),
//     )
// )
let store;
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
    rootReducer,       
    compose(         
        applyMiddleware(logger, thunk),
        )    
    );}else{    
        store = createStore(        
            rootReducer,        
            compose(applyMiddleware(logger,thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错    
        );}

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Container/>
            </Provider>
        );
    }
}


