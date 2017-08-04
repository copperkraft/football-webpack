import React from 'react';
import PropTypes from 'prop-types';

import Spin from 'components/spinner/spinner';
import PlayerCard from 'components/player-card/player-card';
import Fixture from 'models/fixture/fixture';
import FixtureCard from 'components/fixture-card/fixture-card';

export function FixturesList(props) {
    const fixturesList = props.fixturesList;
    if (fixturesList && fixturesList.length) {
        return (
            <div>
                {fixturesList.map(fixture => <FixtureCard key={fixture.id} fixture={fixture}/>)}
            </div>
        );
    } else {
        return <Spin/>;
    }
}

FixturesList.propTypes = {
    fixturesList: PropTypes.arrayOf(PropTypes.instanceOf(Fixture))
};