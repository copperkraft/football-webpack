import {SELECT_LEAGUE} from '../actions/actions';

const initialState = 'English Premier League';

export default function selectedLeague(state = initialState, action) {
    switch (action.type) {
        case SELECT_LEAGUE:
            return action.payload;
        default:
            return state;
    }
}