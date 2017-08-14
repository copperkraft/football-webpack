import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import './app.less';

import Header from './components/header/header';

import configureStore from './store/configureStore';
import {defaultRoute, routedComponents} from './routed-components';

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <div>
                <Header/>
                <Switch>
                    {routedComponents.map(item =>
                        <Route key={item.path} exact path={item.path} component={item.component}/>
                    )}
                    <Redirect from="/" to={defaultRoute}/>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('site')
);