import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
    changePlayerPagination,
    fetchTeamPlayers
} from '../actions/team-players-actions';
import Paginator from 'components/paginator/paginator';
import Title from 'components/title/title';
import {PlayerList} from 'components/player-list/player-list';
import {initialPage} from 'constants/pagination';

class TeamPlayers extends Component {
    constructor() {
        super();

        this.changePageSize = this.changePageSize.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    changePageSize(size) {
        const {dispatch} = this.props;
        dispatch(changePlayerPagination(initialPage, size));
    }

    changePage(page) {
        const {dispatch, teamPlayers} = this.props;
        dispatch(changePlayerPagination(page, teamPlayers.pagination.pageSize));
    }

    componentDidMount() {
        const {teamPlayers, teamId, dispatch} = this.props;
        dispatch(fetchTeamPlayers(teamId, teamPlayers.pagination.page, teamPlayers.pagination.pageSize));
    }

    componentWillReceiveProps(nextProps) {
        const {teamPlayers, teamId, dispatch} = nextProps;
        if (this.props.teamPlayers.pagination.page !== teamPlayers.pagination.page) {
            dispatch(fetchTeamPlayers(teamId, teamPlayers.pagination.page, teamPlayers.pagination.pageSize));
        }
    }

    render() {
        const {teamPlayers, teamId} = this.props;
        return (
            <div className="container">
                <Title text={'players of team #' + teamId}/>
                <Paginator
                    page={teamPlayers.pagination.page}
                    pageSize={teamPlayers.pagination.pageSize}
                    maxPage={teamPlayers.pagination.pageCount}
                    onSizeChange={this.changePageSize}
                    onPageChange={this.changePage}
                />
                <PlayerList playerList={teamPlayers.players.items}/>
            </div>
        );
    }
}

TeamPlayers.propTypes = {
    teamId: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    return {teamPlayers: state.teamPlayers};
}

export default connect(mapStateToProps)(TeamPlayers);

