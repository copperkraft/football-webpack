import {
    RECEIVE_TEAM_INFO,
    REQUEST_TEAM_INFO
} from '../actions/team-info-actions';

const initialState = {
    isFetching: false,
    team: null
};

export function teamInfo(state = initialState, action) {
    switch (action.type) {
        case REQUEST_TEAM_INFO:
            return {
                isFetching: true,
                team: null
            };
        case RECEIVE_TEAM_INFO:
            return {
                isFetching: false,
                team: action.payload
            };
        default:
            return state;
    }
}