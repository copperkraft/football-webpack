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
        const {dispatch, pagination} = this.props;
        dispatch(changePlayerPagination(page, pagination.pageSize));
    }

    componentDidMount() {
        const {pagination, teamId, dispatch} = this.props;
        dispatch(fetchTeamPlayers(teamId, pagination.page, pagination.pageSize));
    }

    componentWillReceiveProps(nextProps) {
        const {pagination: newPagination, teamId, dispatch} = nextProps;
        const {pagination: oldPagination} = this.props;
        if (newPagination !== oldPagination) {
            dispatch(fetchTeamPlayers(teamId, newPagination.page, newPagination.pageSize));
        }
    }

    componentWillUnmount() {
        const {dispatch, pagination} = this.props;
        dispatch(changePlayerPagination(initialPage, pagination.pageSize));
    }

    render() {
        const {players, pagination} = this.props;
        return (
            <div>
                <Title text="Players"/>
                <Paginator
                    page={pagination.page}
                    pageSize={pagination.pageSize}
                    maxPage={players.pageCount}
                    onSizeChange={this.changePageSize}
                    onPageChange={this.changePage}
                />
                <PlayerList playerList={players.items}/>
            </div>
        );
    }
}

TeamPlayers.propTypes = {
    teamId: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    return {pagination: state.teamPlayers.pagination, players: state.teamPlayers.players};
}

export default connect(mapStateToProps)(TeamPlayers);

