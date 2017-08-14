import React from 'react';
import PropTypes from 'prop-types';

import Spin from 'components/spinner/spinner';
import PlayerCard from 'components/player-card/player-card';
import Fixture from 'models/fixture/fixture';
import FixtureCard from 'components/fixture-card/fixture-card';

export function FixturesList(props) {
    const {fixturesList, selected, onSelect} = props;
    if (fixturesList) {
        return (
            <div>
                {fixturesList.map(fixture => 
                    <FixtureCard 
                        isSelected={selected && selected.id === fixture.id}
                        key={fixture.id || JSON.stringify(fixture)} 
                        fixture={fixture} 
                        onClick={() => onSelect && onSelect(fixture)}
                    />
                )}
            </div>
        );
    } else {
        return <Spin/>;
    }
}

FixturesList.propTypes = {
    fixturesList: PropTypes.arrayOf(PropTypes.instanceOf(Fixture)),
    onSelect: PropTypes.func,
    selected: PropTypes.instanceOf(Fixture)
};