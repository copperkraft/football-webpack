import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {selectPageSize} from '../actions/page-size-actions';
import {fetchTeamPlayers} from '../actions/team-players-actions';
import Paginator from 'components/paginator/paginator';
import Title from 'components/title/title';
import PlayerCard from 'components/player-card/player-card';
import {PlayerList} from 'components/player-list/player-list';

class TeamPlayers extends Component {
    constructor() {
        super();

        this.changePageSize = this.changePageSize.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    changePageSize(size) {
        const {dispatch} = this.props;
        dispatch(selectPageSize(size));
    }

    changePage(page) {
        const {pageSize, teamId, dispatch} = this.props;
        dispatch(fetchTeamPlayers(teamId, page, pageSize));
    }

    componentDidMount() {
        const {teamPlayers, pageSize, teamId, dispatch} = this.props;
        dispatch(fetchTeamPlayers(teamId, teamPlayers.page, pageSize));
    }

    componentWillReceiveProps(nextProps) {
        const {teamPlayers, pageSize, teamId, dispatch} = nextProps;
        if (this.props.teamPlayers.page !== teamPlayers.page) {
            dispatch(fetchTeamPlayers(teamId, teamPlayers.page, pageSize));
        }
    }

    render() {
        const {teamPlayers, pageSize, teamId} = this.props;
        return (
            <div className="container">
                <Title text={'players of team #' + teamId}/>
                <Paginator
                    page={teamPlayers.page}
                    pageSize={pageSize}
                    maxPage={teamPlayers.pageCount}
                    onSizeChange={this.changePageSize}
                    onPageChange={this.changePage}
                />
                <PlayerList playerList={teamPlayers.items}/>
            </div>
        );
    }
}

TeamPlayers.propTypes = {
    teamId: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    return {teamPlayers: state.teamPlayers, pageSize: state.pageSize};
}

export default connect(mapStateToProps)(TeamPlayers);

