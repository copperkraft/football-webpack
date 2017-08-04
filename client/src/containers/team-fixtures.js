import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Paginator from 'components/paginator/paginator';
import Title from 'components/title/title';

import {initialPage} from 'constants/pagination';
import {
    changeFixturesFilters,
    changeFixturesPagination,
    fetchTeamFixtures
} from '../actions/team-fixtures-actions';
import {FixturesList} from 'components/fixtures-list/fixtures-list';
import DateRangeSelect from 'components/date-range-select/date-range-select';

class TeamFixtures extends Component {
    constructor() {
        super();

        this.changePageSize = this.changePageSize.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changeFilters = this.changeFilters.bind(this);
    }

    changePageSize(size) {
        const {dispatch} = this.props;
        dispatch(changeFixturesPagination(initialPage, size));
    }

    changePage(page) {
        const {dispatch, pagination} = this.props;
        dispatch(changeFixturesPagination(page, pagination.pageSize));
    }

    changeFilters(minDate, maxDate) {
        const {dispatch} = this.props;
        dispatch(changeFixturesFilters(minDate, maxDate));
    }

    componentDidMount() {
        const {pagination, teamId, dispatch} = this.props;
        dispatch(fetchTeamFixtures(teamId, pagination.page, pagination.pageSize));
    }

    isRequestParamsChanged(current, next) { //todo: avoid deep comparison. They must be immutable objects!!!
        if (current.pagination.page !== next.pagination.page) return true;
        if (current.pagination.pageSize !== next.pagination.pageSize) return true;
        if (!current.filters || current.filters.startDate !== next.filters.startDate) return true;
        if (!current.filters || current.filters.endDate !== next.filters.endDate) return true;
        return current.teamId !== next.teamId;
    }

    componentWillReceiveProps(nextProps) {
        if (this.isRequestParamsChanged(this.props, nextProps)) {
            this.props.dispatch(
                fetchTeamFixtures(
                    nextProps.teamId,
                    nextProps.pagination.page,
                    nextProps.pagination.pageSize,
                    nextProps.filters.startDate,
                    nextProps.filters.endDate
                )
            );
        }
    }

    componentWillUnmount() {
        const {dispatch, pagination} = this.props;
        dispatch(changeFixturesPagination(initialPage, pagination.pageSize));
    }

    render() {
        const {fixtures, pagination, filters} = this.props;
        return (
            <div>
                <Title text="Fixtures"/>
                <DateRangeSelect
                    minDate={filters.minDate}
                    maxDate={filters.maxDate}
                    startDate={filters.startDate}
                    endDate={filters.endDate}
                    onChange={this.changeFilters}/>
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
    return {
        pagination: state.teamFixtures.pagination,
        fixtures: state.teamFixtures.fixtures,
        filters: state.teamFixtures.filters
    };
}

export default connect(mapStateToProps)(TeamFixtures);

