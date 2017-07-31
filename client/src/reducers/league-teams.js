import {
    INVALIDATE_LEAGUE_TEAMS, RECEIVE_LEAGUE_TEAMS,
    REQUEST_LEAGUE_TEAMS
} from '../actions/league-teams-actions';

const initialState = {
    isFetching: false,
    items: []
};

export function leagueTeams(state = initialState, action) {
    switch (action.type) {
        case INVALIDATE_LEAGUE_TEAMS:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_LEAGUE_TEAMS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                items: null
            });
        case RECEIVE_LEAGUE_TEAMS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.payload.table
            });
        default:
            return state;
    }
}

export function leagueTeamsByLeague(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_LEAGUE_TEAMS:
        case REQUEST_LEAGUE_TEAMS:
        case RECEIVE_LEAGUE_TEAMS:
            return Object.assign({}, state, {
                [action.payload.leagueName]: leagueTeams(state[action.payload.leagueName], action)
            });
        default:
            return state;
    }
}