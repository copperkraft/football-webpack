import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import {render} from 'react-dom';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';

import './app.less';
import {routes} from './constants/routes';

import LeagueTable from './containers/league-table';

import LeagueTeams from './components/league-teams';
import TeamPage from './components/team-page';
import ProfilePage from './components/profile-page';
import Header from './components/header/header';

import configureStore from './store/configureStore';

const store = configureStore();

const routedComponents = [
    {
        path: `/${routes.leagueTablePage}`,
        component: LeagueTable
    }, {
        path: `/${routes.leagueTeamsPage}`,
        component: LeagueTeams
    }, {
        path: `/${routes.team}`,
        component: TeamPage
    }, {
        path: `/${routes.profilePage}`,
        component: ProfilePage
    }
];

render(
    <Provider store={store}>
        <Router>
            <div>
                <Header/>
                {routedComponents.map(item => (
                    <Route key={item.path} path={item.path} component={item.component}/>
                ))}
            </div>
        </Router>
    </Provider>,
    document.getElementById('site')
);