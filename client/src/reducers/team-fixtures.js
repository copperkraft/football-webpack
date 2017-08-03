import {combineReducers} from 'redux';

import {defaultPageSize, initialPage} from 'constants/pagination';
import {
    CHANGE_FIXTURES_PAGINATION,
    RECEIVE_TEAM_FIXTURES,
    REQUEST_TEAM_FIXTURES
} from '../actions/team-fixtures-actions';

const initialPlayers = {
    isFetching: false,
    items: null,
    pageCount: 0
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
                items: action.payload.fixtures
            });
        default:
            return state;
    }
}

const initialPagination = {
    page: initialPage,
    pageSize: defaultPageSize,
    pageCount: 0
};

export function pagination(state = initialPagination, action) {
    switch (action.type) {
        case CHANGE_FIXTURES_PAGINATION:
            return Object.assign({}, state, {
                page: action.payload.page,
                pageSize: action.payload.size
            });
        case RECEIVE_TEAM_FIXTURES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payload.players,
                pageCount: action.payload.pageCount
            });
        default:
            return state;
    }
}

export default combineReducers({fixtures, pagination});