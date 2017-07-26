export const SELECT_LEAGUE = 'SELECT_LEAGUE';
export function selectLeague(league) {
    return {
        type: SELECT_LEAGUE,
        league
    };
}

export const INVALIDATE_LEAGUE = 'INVALIDATE_LEAGUE';
export function invalidateLeague(league) {
    return {
        type: INVALIDATE_LEAGUE,
        league
    };
}

export const REQUEST_TABLE = 'REQUEST_POSTS';
export function requestTable(table) {
    return {
        type: REQUEST_TABLE,
        table
    };
}

export const RECEIVE_TABLE = 'RECEIVE_POSTS';
export function receiveTable(table, data) {
    return {
        type: RECEIVE_TABLE,
        table,
        data
    };
}