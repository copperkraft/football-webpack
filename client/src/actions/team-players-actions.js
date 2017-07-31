import {teamPlayers} from 'providers/team-players-provider';

export const REQUEST_TEAM_PLAYERS = 'REQUEST_TEAM_PLAYERS';
export function requestTeamPlayers(teamId) {
    return {
        type: REQUEST_TEAM_PLAYERS,
        payload: {
            teamId
        }
    };
}

export const RECEIVE_TEAM_PLAYERS = 'RECEIVE_TEAM_PLAYERS';
export function receiveTeamPlayers(players) {
    return {
        type: RECEIVE_TEAM_PLAYERS,
        payload: players
    };
}

export function fetchTeamPlayers(teamId) {
    return function(dispatch) {
        dispatch(requestTeamPlayers(teamId));
        return teamPlayers.get(teamId).then(players => {
            dispatch(receiveTeamPlayers(players));
        });
    };
}