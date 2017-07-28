export const SELECT_LEAGUE = 'SELECT_LEAGUE';
export function selectLeague(leagueName) {
    return {
        type: SELECT_LEAGUE,
        payload: leagueName
    };
}