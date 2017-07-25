import React, { Component } from 'react';
import {connect} from 'react-redux';

import Title from 'components/title/title';
import Table from '../components/table/table';

class LeagueTable extends Component {
    constructor() {
        super();
        this.state = {
            selectedLeagueName: 'aaa'
        };
        this.handleChange = (event) => {
            this.setState({selectedLeagueName: event.target.value});
        };
    }

    render() {
        return (
            <div>
                <Title text={this.state.selectedLeagueName}/>
                <Table array={this.props.leagueTable.leagueTable}/>
                <select className="select" value={this.state.value} onChange={this.handleChange}>
                    {this.leagues.map(league => <option key={league} value={league}>{league}</option>)}
                </select>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({leagueTable: state.leagueTable});
}

export default connect(mapStateToProps)(LeagueTable);