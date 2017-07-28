import {combineReducers} from 'redux';

import selectedLeague from './selected-league';
import {leagueTable, leagueTableByName} from './league-table';
import {leagueTeams, leagueTeamsByLeague} from './league-teams';

export default combineReducers({
    selectedLeague,
    leagueTable,
    leagueTableByName,
    leagueTeams,
    leagueTeamsByLeague
});