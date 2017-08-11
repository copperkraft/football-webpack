import {
    REQUEST_FIXTURE_INFO,
    RECEIVE_FIXTURE_INFO
} from '../actions/fixture-info-actions';

const initialState = {
    isFetching: false,
    fixture: null,
    odds: null,
    stat: null,
    head2head: null
};

export function fixtureInfo(state = initialState, action) {
    switch (action.type) {
        case REQUEST_FIXTURE_INFO:
            return {
                isFetching: true,
                fixture: null,
                odds: null,
                stat: null,
                head2head: null
            };
        case RECEIVE_FIXTURE_INFO:
            return {
                isFetching: false,
                fixture: action.payload.fixture,
                odds: action.payload.odds,
                stat: action.payload.stat,
                head2head: action.payload.head2head
            };
        default:
            return state;
    }
}