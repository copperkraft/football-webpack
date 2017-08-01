import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchLeagueTeams} from '../actions/league-teams-actions';
import {leaguesList} from '../constants/leagues-list';

import {fetchTeamPlayers} from '../actions/team-players-actions';
import Paginator from 'components/paginator/paginator';
import {initialPage} from 'constants/pagination';

class LeagueTeams extends Component {
    constructor() {
        super();

        this.onLeagueChange = this.onLeagueChange.bind(this);
    }

    componentDidMount() {
        const {dispatch, selectedLeague} = this.props;
        dispatch(fetchTeamPlayers(selectedLeague));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedLeague !== this.props.selectedLeague) {
            const {dispatch, selectedLeague} = nextProps;
            dispatch(fetchLeagueTeams(selectedLeague));
        }
    }

    render() {
        return (
            <div className="container">
                <Paginator page={this.props.selected} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {leagueTeams: state.leagueTeams, pageSize: state.pageSize};
}

export default connect(mapStateToProps)(LeagueTeams);

