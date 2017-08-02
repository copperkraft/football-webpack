import {teamPlayers} from 'providers/team-players-provider';

export const REQUEST_TEAM_PLAYERS = 'REQUEST_TEAM_PLAYERS';
export function requestTeamPlayers(page) {
    return {
        type: REQUEST_TEAM_PLAYERS,
        payload: {page}
    };
}

export const RECEIVE_TEAM_PLAYERS = 'RECEIVE_TEAM_PLAYERS';
export function receiveTeamPlayers(players, pageCount, page) {
    return {
        type: RECEIVE_TEAM_PLAYERS,
        payload: {
            players,
            pageCount,
            page
        }
    };
}

export function fetchTeamPlayers(teamId, page, size) {
    return function(dispatch) {
        dispatch(requestTeamPlayers(page));
        return teamPlayers.get(teamId, {page, size}).then(data => {
            dispatch(receiveTeamPlayers(data.list, data.pageCount, data.page));
        });
    };
}
