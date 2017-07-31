import {leagueTeams} from 'providers/league-teams-provider';

export const REQUEST_LEAGUE_TEAMS = 'REQUEST_LEAGUE_TEAMS';
export function requestLeagueTeams(leagueName) {
    return {
        type: REQUEST_LEAGUE_TEAMS,
        payload: leagueName
    };
}

export const RECEIVE_LEAGUE_TEAMS = 'RECEIVE_LEAGUE_TEAMS';
export function receiveLeagueTeams(leagueName, table) {
    return {
        type: RECEIVE_LEAGUE_TEAMS,
        payload: {
            leagueName,
            table
        }
    };
}

export function fetchLeagueTeams(leagueName) {
    return function(dispatch) {
        dispatch(requestLeagueTeams(leagueName));
        return leagueTeams.get(leagueName).then(table => {
            dispatch(receiveLeagueTeams(leagueName, table));
        });
    };
}