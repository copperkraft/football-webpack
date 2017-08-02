import React from 'react';
import PropTypes from 'prop-types';

import './player-list.less';

import Spin from 'components/spinner/spinner';
import PlayerCard from 'components/player-card/player-card';
import Player from 'models/player/player';

export function PlayerList(props) {
    const playerList = props.playerList;
    if (playerList && playerList.length) {
        return (
            <div className="team-list">
                {playerList.map(player => <PlayerCard key={player.id} player={player}/>)}
            </div>
        );
    } else {
        return <Spin/>;
    }
}

PlayerList.propTypes = {
    playerList: PropTypes.arrayOf(PropTypes.instanceOf(Player))
};