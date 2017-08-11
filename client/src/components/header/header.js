import React, {Component} from 'react';

import './header.less';

import InternalLink from 'components/internal-link/internal-link';
import ProfileActions from 'containers/profile-actions';

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">Football statistics</div>
            <nav className="header__navigation">
                <InternalLink 
                    route="leagueTablePage" 
                    className="header__link" 
                    activeClassName="header__link--selected"
                >
                    table
                </InternalLink>
                <InternalLink 
                    route="leagueTeamsPage" 
                    className="header__link" 
                    activeClassName="header__link--selected"
                >
                    teams
                </InternalLink>
            </nav>
            <div className="header__side">
                <ProfileActions/>
            </div>
        </div>
    );
}