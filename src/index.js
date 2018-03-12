import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
//import StartUp from '.components/StartUp';
import Async from './middlewares/async';
//import Retail from './containers/Retail';
import Container from '../container';
const createStoreWithMiddleware = applyMiddleware(Async)(createStore);
const store = createStore(reducers);
ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
            <Container/>
    </Provider>, document.querySelector('#main')
);  