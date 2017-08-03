import {RECEIVE_TWEETS, REQUEST_TWEETS} from '../actions/tweets-action';

const initialState = {
    isFetching: false,
    items: []
};

export function tweets(state = initialState, action) {
    switch (action.type) {
        case REQUEST_TWEETS:
            return {
                isFetching: true,
                items: null
            };
        case RECEIVE_TWEETS:
            return {
                isFetching: false,
                items: action.payload
            };
        default:
            return state;
    }
}