import {combineReducers} from 'redux';

import {selectedLeague} from './selected-league';
import {leagueTable} from './league-table';
import {leagueTeams} from './league-teams';
import {teamInfo} from './team-info';
import {players, pagination} from './team-players';

export default combineReducers({
    selectedLeague,
    leagueTable,
    leagueTeams,
    teamInfo,
    teamPlayers: combineReducers({players, pagination})
});