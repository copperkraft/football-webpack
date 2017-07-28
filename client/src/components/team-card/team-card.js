import React, { Component } from 'react';
import './team-card.less';
import Title from '../title/title';
import InternalLink from '../internal-link/internal-link';

export default class TeamCard extends Component {
    render() {
        const team = this.props.team;
        if (team) {
            return (
                <div className="team-card">
                    <div>
                        <button className="favorite-button"> </button>
                    </div>

                    <div className="team-card__image-container">
                        <img className="team-card__image" src={team.imageUrl}/>
                    </div>
                    <InternalLink className="team-card__fullName" route="team" parameters={{id: team.id}}>
                        {team.fullName}
                    </InternalLink>
                    <div data-bind="visible: name" className="team-card__name">
                        short name: {team.name}
                    </div>
                    <div className="team-card__value" data-bind="visible: squadMarketValue">
                        squad Market Value: <span data-bind="text: squadMarketValue"> </span>
                    </div>
                </div>);
        } else {
            return <Title text="wait..."/>;
        }
    }
}