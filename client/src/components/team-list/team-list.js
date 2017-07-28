import React, { Component } from 'react';
import './team-list.less';
import Title from '../title/title';
import TeamCard from '../team-card/team-card';

export default class TeamList extends Component {
    render() {
        console.log(this.props);
        const teamList = this.props.teamList;
        if (teamList) {
            return (
                <div className="team-list">
                    {teamList.map(team => <TeamCard team={team}/>)}
                </div>
            );
        } else {
            return <Title text="wait..."/>;
        }
    }
}