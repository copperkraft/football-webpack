import {
    RECEIVE_USER,
    REQUEST_USER,
    USER_LOGOUT,
    FAILED_RECEIVE_USER
} from '../actions/user-actions';

const initialState = {
    isFetching: false,
    isFailed: false,
    user: null
};

export function user(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER:
            return {
                isFetching: true,
                user: null,
                isFailed: false
            };
        case RECEIVE_USER:
            return {
                isFetching: false,
                user: action.payload,
                isFailed: false
            };
        case USER_LOGOUT:
            return {
                isFetching: false,
                user: null,
                isFailed: false
            };
        case FAILED_RECEIVE_USER:
            return {
                isFetching: false,
                user: null,
                isFailed: true
            };
        default:
            return state;
    }
}