import React, { Component } from 'react';
import {connect} from 'react-redux';

import Title from 'components/title/title';
import Table from '../components/table/table';
import {fetchTable, selectLeague} from '../actions/actions';
import {leaguesList} from '../constants/leagues-list';
import SelectTabs from '../components/select-tabs/select-tabs';

class LeagueTable extends Component {
    constructor() {
        super();

        this.onLeagueChange = this.onLeagueChange.bind(this);
    }

    componentDidMount() {
        const {dispatch, selectedLeague} = this.props;
        dispatch(fetchTable(selectedLeague));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedLeague !== this.props.selectedLeague) {
            const {dispatch, selectedLeague} = nextProps;
            dispatch(fetchTable(selectedLeague));
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