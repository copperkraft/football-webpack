import React from 'react';
import PropTypes from 'prop-types';

import Team from 'models/team/team';
import TeamCard from 'components/team-card/team-card';
import Spin from 'components/spinner/spinner';

export function TeamList(props) {
    const teamList = props.teamList;
    if (teamList) {
        return (
            <div className="row">
                {teamList.map(team => <TeamCard key={team.id} team={team}/>)}
            </div>
        );
    } else {
        return <Spin/>;
    }
}

TeamList.propTypes = {
    teamList: PropTypes.arrayOf(PropTypes.instanceOf(Team))
};