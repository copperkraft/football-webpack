import {combineReducers} from 'redux';

import {selectedLeague} from './selected-league';
import {leagueTable} from './league-table';
import {leagueTeams} from './league-teams';
import {teamInfo} from './team-info';

export default combineReducers({
    selectedLeague,
    leagueTable,
    leagueTeams,
    teamInfo
});