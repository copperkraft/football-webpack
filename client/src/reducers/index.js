import {combineReducers} from 'redux';

import {selectedLeague} from './selected-league';
import {leagueTable} from './league-table';
import {leagueTeams} from './league-teams';
import {teamInfo} from './team-info';
import {pageSize} from './page-size';

export default combineReducers({
    selectedLeague,
    leagueTable,
    leagueTeams,
    teamInfo,
    pageSize
});