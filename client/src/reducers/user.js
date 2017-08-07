import {
    RECEIVE_USER,
    REQUEST_USER,
    USER_LOGOUT,
    FAILED_RECEIVE_USER
} from '../actions/user-actions';

const initialState = {
    isFetching: false,
    isFailed: false,
    data: null
};

export function user(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER:
            return {
                isFetching: true,
                data: null,
                isFailed: false
            };
        case RECEIVE_USER:
            return {
                isFetching: false,
                data: action.payload,
                isFailed: false
            };
        case USER_LOGOUT:
            return {
                isFetching: false,
                data: null,
                isFailed: false
            };
        case FAILED_RECEIVE_USER:
            return {
                isFetching: false,
                data: null,
                isFailed: true
            };
        default:
            return state;
    }
}