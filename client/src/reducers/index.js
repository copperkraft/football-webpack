import {combineReducers} from 'redux';

import selectedLeague from './selected-league';
import {leagueTable, leagueTableByName} from './league-table';

export default combineReducers({
    selectedLeague,
    leagueTable,
    leagueTableByName
});