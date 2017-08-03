import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './player-card.less';

import InternalLink from 'components/internal-link/internal-link';
import Spin from 'components/spinner/spinner';
import Player from 'models/player/player';

export default function PlayerCard(props) {
    const player = props.player;
    return (
        <div className="player-card">
            <div className="player-card__t-shirt">
                {player.jerseyNumber ? player.jerseyNumber : '?'}
            </div>
            <div className="player-card__full-name">
                {player.name}
            </div>
            <div className="player-card__info">
                position: {player.position}
            </div>
            <div className="player-card__info">
                date of birth: {player.dateOfBirth.toDateString()}
            </div>
            {player.marketValue && <div className="player-card__info">
                Market Value: {player.marketValue}
            </div>}
        </div>);
}

PlayerCard.propTypes = {
    player: PropTypes.instanceOf(Player).isRequired
};