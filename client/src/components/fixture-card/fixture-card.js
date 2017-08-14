import React from 'react';
import PropTypes from 'prop-types';

import './fixture-card.less';

import Fixture from 'models/fixture/fixture';

export default function FixtureCard(props) {
    const {fixture, odds, stat, isSelected} = props;
    return (
        <div className={'fixture-card ' + (isSelected ? 'fixture-card--selected' : '')} onClick={props.onClick}>
            <div className="fixture-card__info">
                {fixture.awayTeamName} - {fixture.homeTeamName}
                {fixture.isFinished && <span>{fixture.goalsAwayTeam} - {fixture.goalsHomeTeam}</span>}
            </div>
            <div className="fixture-card__info">
                Date: {fixture.date.toDateString()}
            </div>
            {odds &&
                <div className="fixture-card__info-block">
                    <div className="fixture-card__info">
                        Odds
                    </div>
                </div>
            }
            {stat &&
                <div className="fixture-card__info-block">
                    <div className="fixture-card__info">
                        {fixture.awayTeamName} wins: {stat.awayTeamWins} <br/>
                        {fixture.homeTeamName} wins: {stat.homeTeamWins} <br/>   
                        Draws: {stat.draws}
                    </div>
                </div>
            }
            
        </div>);
}

FixtureCard.propTypes = {
    fixture: PropTypes.instanceOf(Fixture).isRequired,
    odds: PropTypes.object,
    stat: PropTypes.object,
    isSelected: PropTypes.bool
};