import React, { Component } from 'react';

import './team-card.less';

import InternalLink from '../internal-link/internal-link';
import Spin from 'components/spinner/spinner';

export default class TeamCard extends Component {
    render() {
        const team = this.props.team;
        if (team) {
            return (
                <div className="team-card">
                    <img className="team-card__image" src={team.imageUrl}/>
                    <div className="team-card__full-name">
                        <InternalLink route="team" parameters={{id: team.id}}>
                            {team.fullName}
                        </InternalLink>
                    </div>
                    <div className="team-card__info">
                        short name: {team.name}
                    </div>
                    {team.squadMarketValue && <div className="team-card__info">
                        squad Market Value: {team.squadMarketValue}
                    </div>}
                </div>);
        } else {
            return <Spin/>;
        }
    }
}