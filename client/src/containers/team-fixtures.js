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
import {fetchFixtureInfo} from '../actions/fixture-info-actions';
import {FixturesList} from 'components/fixtures-list/fixtures-list';
import DateRangeSelect from 'components/date-range-select/date-range-select';

class TeamFixtures extends Component {
    constructor() {
        super();

        this.changePageSize = this.changePageSize.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changeFilters = this.changeFilters.bind(this);
        this.loadInfo = this.loadInfo.bind(this);
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

    loadInfo(fixture) {
        const {dispatch} = this.props;
        dispatch(fetchFixtureInfo(fixture));
    }

    componentWillMount() {
        const {pagination, teamId, dispatch} = this.props;
        dispatch(fetchTeamFixtures(teamId, pagination.page, pagination.pageSize));
    }

    componentWillReceiveProps(nextProps) {
        const {filters: currentFilters, pagination: currentPagination} = this.props;
        const {filters: nextFilters, pagination: nextPagination} = nextProps;
        if (currentFilters !== nextFilters || currentPagination !== nextPagination) {
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
                    minDate={fixtures.minDate}
                    maxDate={fixtures.maxDate}
                    startDate={filters.startDate || fixtures.minDate}
                    endDate={filters.endDate || fixtures.maxDate}
                    onChange={this.changeFilters}
                />
                <Paginator
                    page={pagination.page}
                    pageSize={pagination.pageSize}
                    maxPage={fixtures.pageCount}
                    onSizeChange={this.changePageSize}
                    onPageChange={this.changePage}
                />
                <FixturesList onSelect={this.loadInfo} fixturesList={fixtures.items}/>
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

