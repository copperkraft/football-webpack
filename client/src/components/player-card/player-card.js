import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './player-card.less';

import InternalLink from 'components/internal-link/internal-link';
import Spin from 'components/spinner/spinner';
import Player from 'models/player/player';

export default function PlayerCard(props) {
    const team = props.team;
    if (team) {
        return (
            <div className="team-card">
                <img className="team-card__image" src={team.imageUrl}/>
                <InternalLink
                    route="team"
                    className="team-card__full-name"
                    activeClassName="team-card__full-name--current"
                    parameters={{id: team.id}}>
                    {team.fullName}
                </InternalLink>
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

PlayerCard.propTypes = {
    player: PropTypes.instanceOf(Player)
};