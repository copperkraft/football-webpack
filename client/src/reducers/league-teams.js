import {
    RECEIVE_LEAGUE_TEAMS,
    REQUEST_LEAGUE_TEAMS
} from '../actions/league-teams-actions';

const initialState = {
    isFetching: false,
    items: []
};

export function leagueTeams(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LEAGUE_TEAMS:
            return {
                isFetching: true,
                items: null
            };
        case RECEIVE_LEAGUE_TEAMS:
            return {
                isFetching: false,
                items: action.payload.table
            };
        default:
            return state;
    }
}