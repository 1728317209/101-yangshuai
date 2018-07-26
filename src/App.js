import React from 'react';
import Container from './container/containers'
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger),
    )
)

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Container/>
            </Provider>
        );
    }
}


