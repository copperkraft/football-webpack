import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './team-list.less';

import Team from 'models/team/team';
import TeamCard from 'components/team-card/team-card';
import Spin from 'components/spinner/spinner';

export default class TeamList extends Component {
    render() {
        const teamList = this.props.teamList;
        if (teamList) {
            return (
                <div className="team-list">
                    {teamList.map(team => <TeamCard key={team.id} team={team}/>)}
                </div>
            );
        } else {
            return <Spin/>;
        }
    }
}

TeamList.propTypes = {
    teamList: PropTypes.arrayOf(PropTypes.instanceOf(Team))
};