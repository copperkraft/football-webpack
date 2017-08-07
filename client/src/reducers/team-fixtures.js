import {combineReducers} from 'redux';

import {defaultPageSize, initialPage} from 'constants/pagination';
import {
    CHANGE_FIXTURES_FILTERS,
    CHANGE_FIXTURES_PAGINATION,
    RECEIVE_TEAM_FIXTURES,
    REQUEST_TEAM_FIXTURES
} from '../actions/team-fixtures-actions';

const initialPlayers = {
    isFetching: false,
    items: null,
    pageCount: 0,
    minDate: null,
    maxDate: null
};

export function fixtures(state = initialPlayers, action) {
    switch (action.type) {
        case REQUEST_TEAM_FIXTURES:
            return Object.assign({}, state, {
                isFetching: true,
                items: null
            });
        case RECEIVE_TEAM_FIXTURES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payload.fixtures,
                pageCount: action.payload.pageCount,
                minDate: action.payload.minDate,
                maxDate: action.payload.maxDate
            });
        default:
            return state;
    }
}

const initialPagination = {
    page: initialPage,
    pageSize: defaultPageSize
};

export function pagination(state = initialPagination, action) {
    switch (action.type) {
        case CHANGE_FIXTURES_PAGINATION:
            return Object.assign({}, state, {
                page: action.payload.page,
                pageSize: action.payload.size
            });
        default:
            return state;
    }
}

const initialFilters = {
    startDate: null,
    endDate: null
};

export function filters(state = initialFilters, action) {
    switch (action.type) {
        case CHANGE_FIXTURES_FILTERS:
            return Object.assign({}, state, {
                startDate: action.payload.startDate || state.startDate,
                endDate: action.payload.endDate || state.endDate
            });
        default:
            return state;
    }
}

export default combineReducers({fixtures, pagination, filters});