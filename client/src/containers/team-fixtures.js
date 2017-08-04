import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Paginator from 'components/paginator/paginator';
import Title from 'components/title/title';

import {initialPage} from 'constants/pagination';
import {
    changeFixturesPagination,
    fetchTeamFixtures
} from '../actions/team-fixtures-actions';
import {FixturesList} from 'components/fixtures-list/fixtures-list';

class TeamFixtures extends Component {
    constructor() {
        super();

        this.changePageSize = this.changePageSize.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    changePageSize(size) {
        const {dispatch} = this.props;
        dispatch(changeFixturesPagination(initialPage, size));
    }

    changePage(page) {
        const {dispatch, pagination} = this.props;
        dispatch(changeFixturesPagination(page, pagination.pageSize));
    }

    componentDidMount() {
        const {pagination, teamId, dispatch} = this.props;
        dispatch(fetchTeamFixtures(teamId, pagination.page, pagination.pageSize));
    }

    componentWillReceiveProps(nextProps) {
        const {pagination: newPagination, teamId, dispatch} = nextProps;
        const {pagination: oldPagination} = this.props;
        if (newPagination.page !== oldPagination.page || newPagination.pageSize !== oldPagination.pageSize) {
            dispatch(fetchTeamFixtures(teamId, newPagination.page, newPagination.pageSize));
        }
    }

    componentWillUnmount() {
        const {dispatch, pagination} = this.props;
        dispatch(changeFixturesPagination(initialPage, pagination.pageSize));
    }

    render() {
        const {fixtures, pagination} = this.props;
        return (
            <div>
                <Title text="Fixtures"/>
                <Paginator
                    page={pagination.page}
                    pageSize={pagination.pageSize}
                    maxPage={pagination.pageCount}
                    onSizeChange={this.changePageSize}
                    onPageChange={this.changePage}
                />
                <FixturesList fixturesList={fixtures.items}/>
            </div>
        );
    }
}

TeamFixtures.propTypes = {
    teamId: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    return {pagination: state.teamFixtures.pagination, fixtures: state.teamFixtures.fixtures};
}

export default connect(mapStateToProps)(TeamFixtures);

