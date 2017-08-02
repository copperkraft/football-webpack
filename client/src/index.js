import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {HashRouter as Router, Redirect, Route} from 'react-router-dom';

import './app.less';

import Header from './components/header/header';

import configureStore from './store/configureStore';
import {routedComponents} from './routed-components';

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <div>
                <Header/>
                {routedComponents.map(item => 
                    <Route key={item.path} exact path={item.path} component={item.component}/>
                )}
            </div>
        </Router>
    </Provider>,
    document.getElementById('site')
);