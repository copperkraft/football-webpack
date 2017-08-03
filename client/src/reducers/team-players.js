import {
    CHANGE_PLAYERS_PAGINATION,
    RECEIVE_TEAM_PLAYERS,
    REQUEST_TEAM_PLAYERS
} from '../actions/team-players-actions';
import {defaultPageSize, initialPage} from 'constants/pagination';

const initialPlayers = {
    isFetching: false,
    items: null,
    pageCount: 0
};

export function players(state = initialPlayers, action) {
    switch (action.type) {
        case CHANGE_PLAYERS_PAGINATION:
            return Object.assign({}, state, {
                items: null
            });
        case REQUEST_TEAM_PLAYERS:
            return Object.assign({}, state, {
                isFetching: true,
                items: null
            });
        case RECEIVE_TEAM_PLAYERS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payload.players
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
        case CHANGE_PLAYERS_PAGINATION:
            return Object.assign({}, state, {
                page: action.payload.page,
                pageSize: action.payload.size
            });
        case RECEIVE_TEAM_PLAYERS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payload.players,
                pageCount: action.payload.pageCount
            });
        default:
            return state;
    }
}