import {
    RECEIVE_USER,
    REQUEST_USER,
    USER_LOGOUT,
    FAILED_RECEIVE_USER
} from '../actions/user-actions';

const initialState = {
    isFetching: false,
    signed: false,
    data: null
};

export function user(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER:
            return {
                isFetching: true,
                data: null,
                signed: false
            };
        case RECEIVE_USER:
            return {
                isFetching: false,
                data: action.payload,
                signed: true
            };
        case USER_LOGOUT:
            return {
                isFetching: false,
                data: null,
                signed: false
            };
        case FAILED_RECEIVE_USER:
            return {
                isFetching: false,
                data: null,
                signed: false
            };
        default:
            return state;
    }
}