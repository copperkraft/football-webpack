import React, {Component} from 'react';
import {connect} from 'react-redux';

import Title from 'components/title/title';

import Select from '../components/select/select';

import {fetchLeagueTeams} from '../actions/league-teams-actions';
import {leaguesList} from '../constants/leagues-list';

import {selectLeague} from '../actions/league-actions';
import {TeamList} from '../components/team-list/team-list';

class LeagueTeams extends Component {
    constructor() {
        super();

        this.onLeagueChange = this.onLeagueChange.bind(this);
    }

    componentWillMount() {
        const {dispatch, selectedLeague} = this.props;
        dispatch(fetchLeagueTeams(selectedLeague));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedLeague !== this.props.selectedLeague) {
            const {dispatch, selectedLeague} = nextProps;
            dispatch(fetchLeagueTeams(selectedLeague));
        }
    }

    onLeagueChange(league) {
        const {dispatch} = this.props;
        dispatch(selectLeague(league));
    }

    render() {
        return (
            <div className="container">
                <Title text={this.props.selectedLeague}/>
                <Select values={leaguesList}
                    onChange={this.onLeagueChange}
                    initial={this.props.selectedLeague}
                />
                <TeamList teamList={this.props.leagueTeams.items}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        leagueTeams: state.leagueTeams, 
        selectedLeague: state.selectedLeague
    };
}

export default connect(mapStateToProps)(LeagueTeams);

