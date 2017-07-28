import {leagueTeams} from 'providers/league-teams-provider';

export const REQUEST_LEAGUE_TEAMS = 'REQUEST_LEAGUE_TEAMS';
export function requestLeagueTeams(leagueName) {
    return {
        type: REQUEST_LEAGUE_TEAMS,
        payload: leagueName
    };
}

export const RECEIVE_LEAGUE_TEAMS = 'RECEIVE_LEAGUE_TEAMS';
export function recieveLeagueTeams(leagueName, table) {
    return {
        type: RECEIVE_LEAGUE_TEAMS,
        payload: {
            leagueName,
            table
        }
    };
}

export const INVALIDATE_LEAGUE_TEAMS = 'INVALIDATE_LEAGUE_TEAMS';
export function invalidateLeagueTeams(leagueName) {
    return {
        type: RECEIVE_LEAGUE_TEAMS,
        payload: {
            leagueName
        }
    };
}

export function fetchLeagueTeams(leagueName) {
    return function(dispatch) {
        dispatch(requestLeagueTeams(leagueName));
        return leagueTeams.get(leagueName).then(table => {
            dispatch(recieveLeagueTeams(leagueName, table));
        });
    };
}