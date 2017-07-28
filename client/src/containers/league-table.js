import React, { Component } from 'react';
import {connect} from 'react-redux';

import Table from '../components/table/table';
import {fetchLeagueTable} from '../actions/league-table-actions';
import {leaguesList} from '../constants/leagues-list';
import SelectTabs from '../components/select-tabs/select-tabs';
import {selectLeague} from '../actions/league-actions';

class LeagueTable extends Component {
    constructor() {
        super();

        this.onLeagueChange = this.onLeagueChange.bind(this);
    }

    componentDidMount() {
        const {dispatch, selectedLeague} = this.props;
        dispatch(fetchLeagueTable(selectedLeague));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedLeague !== this.props.selectedLeague) {
            const {dispatch, selectedLeague} = nextProps;
            dispatch(fetchLeagueTable(selectedLeague));
        }
    }

    onLeagueChange(league) {
        const {dispatch} = this.props;
        dispatch(selectLeague(league));
    }

    render() {
        return (
            <div className="container">
                <SelectTabs values={leaguesList}
                    onChange={this.onLeagueChange}
                    initial={this.props.selectedLeague}/>
                <Table array={this.props.leagueTable.items}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({leagueTable: state.leagueTable, selectedLeague: state.selectedLeague});
}

export default connect(mapStateToProps)(LeagueTable);