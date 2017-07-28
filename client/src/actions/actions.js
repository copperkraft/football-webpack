import {leagueTable} from '../providers/league-table-provider';

export const SELECT_LEAGUE = 'SELECT_LEAGUE';
export function selectLeague(leagueName) {
    return {
        type: SELECT_LEAGUE,
        payload: leagueName
    };
}

export const REQUEST_TABLE = 'REQUEST_TABLE';
function requestTable(leagueName) {
    return {
        type: REQUEST_TABLE,
        payload: leagueName
    };
}

export const RECEIVE_TABLE = 'RECEIVE_TABLE';
function receiveTable(leagueName, table) {
    return {
        type: RECEIVE_TABLE,
        payload: {
            leagueName,
            table
        }
    };
}

export const INVALIDATE_TABLE = 'INVALIDATE_TABLE';
function invalidateTable(leagueName) {
    return {
        type: RECEIVE_TABLE,
        payload: {
            leagueName
        }
    };
}

export function fetchTable(leagueName) {
    return function(dispatch) {
        dispatch(requestTable(leagueName));
        return leagueTable.get(leagueName).then(table => {
            dispatch(receiveTable(leagueName, table));
        });
    };
}