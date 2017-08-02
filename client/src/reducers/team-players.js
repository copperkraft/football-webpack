import {
    RECEIVE_TEAM_PLAYERS,
    REQUEST_TEAM_PLAYERS
} from '../actions/team-players-actions';
import {initialPage} from 'constants/pagination';

const initialState = {
    isFetching: false,
    items: [],
    page: initialPage,
    pageCount: 1
};

export function teamPlayers(state = initialState, action) {
    switch (action.type) {
        case REQUEST_TEAM_PLAYERS:
            return Object.assign({}, state, {
                isFetching: true,
                items: null,
                page: action.payload.page
            });
        case RECEIVE_TEAM_PLAYERS:
            console.log(action.payload.page, state.page);
            if (action.payload.page === state.page) {
                return Object.assign({}, state, {
                    isFetching: false,
                    items: action.payload.players,
                    pageCount: action.payload.pageCount
                });
            } else {
                return state;
            }
        default:
            return state;
    }
}