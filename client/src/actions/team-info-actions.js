import {teamInfo} from 'providers/team-info-provider';

export const REQUEST_TEAM_INFO = 'REQUEST_TEAM_INFO';
export function requestTeamInfo(teamId) {
    return {
        type: REQUEST_TEAM_INFO,
        payload: teamId
    };
}

export const RECEIVE_TEAM_INFO = 'RECEIVE_TEAM_INFO';
export function receiveTeamInfo(team) {
    return {
        type: RECEIVE_TEAM_INFO,
        payload: team
    };
}

export function fetchTeamInfo(teamId) {
    return function(dispatch) {
        dispatch(requestTeamInfo(teamId));
        return teamInfo.get(teamId).then(team => {
            console.log(team);
            dispatch(receiveTeamInfo(team));
        });
    };
}