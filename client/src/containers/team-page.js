import React, { Component } from 'react';
import {connect} from 'react-redux';

import Title from 'components/title/title';
import {fetchTeamInfo} from '../actions/team-info-actions';
import TeamCard from 'components/team-card/team-card';
import Spin from 'components/spinner/spinner';

class TeamPage extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchTeamInfo(this.props.match.params.id));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            const {dispatch} = nextProps;
            dispatch(fetchTeamInfo(this.props.match.params.id));
        }
    }
    render() {
        return (
            <div className="container">
                {this.props.teamInfo.isFetching
                    ? <Spin/>
                    : <TeamCard team={this.props.teamInfo.team}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({teamInfo: state.teamInfo});
}

export default connect(mapStateToProps)(TeamPage);

/*
import {teamInfo} from 'providers/team-info-provider';

class TeamPageViewModel {
    constructor(params) {
        this.team = ko.observable();
        teamInfo.get(params.id).then(data => this.team(data));

        this.selectedTab = ko.observable('fixtures-tab');

        this.tab = ko.pureComputed(function() {
            return {
                name: this.selectedTab,
                params: {
                    id: params.id,
                    name: this.team() ? this.team().name : ''
                }
            };
        }, this);
    }

    setSelection(select) {
        this.selectedTab(select);
    }

    isSelected(tab) {
        return this.selectedTab() === tab;
    }
}

register('team-page', template, TeamPageViewModel);*/