import {
    INVALIDATE_TABLE,
    RECEIVE_TABLE,
    REQUEST_TABLE
} from '../actions/actions';

const initialState = {
    isFetching: false,
    items: []
};

export function leagueTable(state = initialState, action) {
    switch (action.type) {
        case INVALIDATE_TABLE:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_TABLE:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                items: null
            });
        case RECEIVE_TABLE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.payload.table
            });
        default:
            return state;
    }
}

export function leagueTableByName(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_TABLE:
        case REQUEST_TABLE:
        case RECEIVE_TABLE:
            return Object.assign({}, state, {
                [action.payload.leagueName]: leagueTable(state[action.payload.leagueName], action)
            });
        default:
            return state;
    }
}