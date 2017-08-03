import {teamPlayers} from 'providers/team-players-provider';

export const REQUEST_TEAM_PLAYERS = 'REQUEST_TEAM_PLAYERS';
export function requestTeamPlayers(page, size) {
    return {
        type: REQUEST_TEAM_PLAYERS,
        payload: {
            page,
            size
        }
    };
}

export const RECEIVE_TEAM_PLAYERS = 'RECEIVE_TEAM_PLAYERS';
export function receiveTeamPlayers(players, pageCount) {
    return {
        type: RECEIVE_TEAM_PLAYERS,
        payload: {
            players,
            pageCount
        }
    };
}

export const CHANGE_PLAYERS_PAGINATION = 'CHANGE_PLAYERS_PAGINATION';
export function changePlayerPagination(page, size) {
    return {
        type: CHANGE_PLAYERS_PAGINATION,
        payload: {
            page,
            size
        }
    };
}

export function fetchTeamPlayers(teamId, page, size) {
    return function(dispatch) {
        dispatch(requestTeamPlayers(page, size));
        return teamPlayers.get(teamId, {number: page, size}).then(data => {
            dispatch(receiveTeamPlayers(data.list, data.pageCount, data.page, size));
        });
    };
}
