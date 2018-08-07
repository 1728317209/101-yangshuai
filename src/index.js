import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import serverApi from './middleware/serverApi';
import rootReducer from './Reducers';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './App';
import Profile from './container/Profile/Profile';
import OP from './container/OP/OP';
import ClassDetails from './container/ClassDetails/ClassDetails';
import HomeworkReview from './container/HomeworkReview/homeworkReview';

import './index.css';
import registerServiceWorker from './registerServiceWorker';


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

const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: Profile },
    childRoutes: [
        { path: 'profile', component: Profile },
        { path: 'op/:mid', component: OP },
        { path: 'classDetails/:classId', component: ClassDetails },
        { path: 'homework', component: HomeworkReview }
    ]
}]

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
        {/* <Profile /> */}
        {/* <OP /> */}
        {/* <ClassDetails /> */}
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
