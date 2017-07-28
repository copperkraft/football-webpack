import React, { Component } from 'react';
import './header.less';
import {NavLink } from 'react-router-dom';
import {routes} from 'constants/routes';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__logo">Football statistics</div>
                <nav className="header__navigation">
                    <NavLink className="header__link"
                        to={`/${routes.leagueTablePage}`}
                        activeClassName="header__link--selected">
                        league table
                    </NavLink>
                    <NavLink className="header__link"
                        to={`/${routes.leagueTeamsPage}`}
                        activeClassName="header__link--selected">
                        league teams
                    </NavLink>
                </nav>
            </div>
        );
    }
}