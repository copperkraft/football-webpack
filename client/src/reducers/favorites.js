import {
    REQUEST_FAVORITES,
    RECEIVE_FAVORITES,
    FAILED_RECEIVE_FAVORITES
} from 'actions/favorite-actions';

import {USER_LOGOUT} from 'actions/user-actions';

const initialState = {
    isFetching: false,
    items: null
};

export function favorites(state = initialState, action) {
    switch (action.type) {
        case REQUEST_FAVORITES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_FAVORITES:
            return {
                isFetching: false,
                items: action.payload
            };
        case FAILED_RECEIVE_FAVORITES:
            return Object.assign({}, state, {
                isFetching: false
            });
        case USER_LOGOUT:
            return {
                isFetching: false,
                items: null
            };
        default:
            return state;
    }
}