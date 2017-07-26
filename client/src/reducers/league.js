import {
    SELECT_LEAGUE
} from '../actions/actions';

const initialState = {
    leagueTable: 'english'
};

export default function leagueTable(state = initialState, action) {
    switch (action.type) {
        case SELECT_LEAGUE:
            return action.payload;
        default:
            return state;
    }
}