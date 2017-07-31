import {
    RECEIVE_LEAGUE_TABLE,
    REQUEST_LEAGUE_TABLE
} from '../actions/league-table-actions';

const initialState = {
    isFetching: false,
    items: []
};

export function leagueTable(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LEAGUE_TABLE:
            return {
                isFetching: true,
                items: null
            };
        case RECEIVE_LEAGUE_TABLE:
            return {
                isFetching: false,
                items: action.payload.table
            };
        default:
            return state;
    }
}