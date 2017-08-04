import React from 'react';
import PropTypes from 'prop-types';

import './fixture-card.less';

import Fixture from 'models/fixture/fixture';

export default function FixtureCard(props) {
    let fixture = props.fixture;
    return (
        <div className="player-card">
            <div className="player-card__info">
                {fixture.awayTeamName} - {fixture.homeTeamName}
                {fixture.isFinished && <span>{fixture.goalsAwayTeam} - {fixture.goalsHomeTeam}</span>}
            </div>
            <div className="player-card__info">
                Date: {fixture.date.toDateString()}
            </div>
        </div>);
}

FixtureCard.propTypes = {
    fixture: PropTypes.instanceOf(Fixture).isRequired
};