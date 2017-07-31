import {leagueTable} from 'providers/league-table-provider';

export const REQUEST_LEAGUE_TABLE = 'REQUEST_LEAGUE_TABLE';
export function requestLeagueTable(leagueName) {
    return {
        type: REQUEST_LEAGUE_TABLE,
        payload: leagueName
    };
}

export const RECEIVE_LEAGUE_TABLE = 'RECEIVE_LEAGUE_TABLE';
export function receiveLeagueTable(leagueName, table) {
    return {
        type: RECEIVE_LEAGUE_TABLE,
        payload: {
            leagueName,
            table
        }
    };
}

export function fetchLeagueTable(leagueName) {
    return function(dispatch) {
        dispatch(requestLeagueTable(leagueName));
        return leagueTable.get(leagueName).then(table => {
            dispatch(receiveLeagueTable(leagueName, table));
        });
    };
}