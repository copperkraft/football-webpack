import {
    RECEIVE_USER,
    REQUEST_USER,
    USER_LOGOUT
} from '../actions/user-actions';

const initialState = {
    isFetching: false,
    user: null
};

export function user(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER:
            return {
                isFetching: true,
                user: null
            };
        case RECEIVE_USER:
            return {
                isFetching: false,
                user: action.payload
            };
        case USER_LOGOUT:
            return {
                isFetching: false,
                user: null
            };
        default:
            return state;
    }
}