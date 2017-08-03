import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './player-card.less';

import InternalLink from 'components/internal-link/internal-link';
import Spin from 'components/spinner/spinner';
import Player from 'models/player/player';

export default function PlayerCard(props) {
    const player = props.player;
    return (
        <div className="team-card">
            <div className="team-card__t-shirt">
                {player.jerseyNumber ? player.jerseyNumber : '?'}
            </div>
            <div className="team-card__full-name">
                {player.name}
            </div>
            <div className="team-card__info">
                position: {player.position}
            </div>
            <div className="team-card__info">
                date of birth: {player.dateOfBirth.toDateString()}
            </div>
            {player.marketValue && <div className="team-card__info">
                Market Value: {player.marketValue}
            </div>}
        </div>);
}

PlayerCard.propTypes = {
    player: PropTypes.instanceOf(Player).isRequired
};