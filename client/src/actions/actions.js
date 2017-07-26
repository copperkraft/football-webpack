export const SELECT_LEAGUE = 'SELECT_LEAGUE';
export function selectLeague(league) {
    return {
        type: SELECT_LEAGUE,
        payload: league
    };
}

export const INVALIDATE_LEAGUE = 'INVALIDATE_LEAGUE';
export function invalidateLeague(league) {
    return {
        type: INVALIDATE_LEAGUE,
        payload: league
    };
}

export const REQUEST_TABLE = 'REQUEST_POSTS';
export function requestTable(table) {
    return {
        type: REQUEST_TABLE,
        payload: table
    };
}

export const RECEIVE_TABLE = 'RECEIVE_POSTS';
export function receiveTable(table, data) {
    return {
        type: RECEIVE_TABLE,
        payload: table
    };
}