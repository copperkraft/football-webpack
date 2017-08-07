import {combineReducers} from 'redux';

import {selectedLeague} from './selected-league';
import {leagueTable} from './league-table';
import {leagueTeams} from './league-teams';
import {teamInfo} from './team-info';
import teamPlayers from './team-players';
import teamFixtures from './team-fixtures';
import {tweets} from './tweets';
import {user} from './user';

export default combineReducers({
    selectedLeague,
    leagueTable,
    leagueTeams,
    teamInfo,
    teamPlayers,
    teamFixtures,
    tweets,
    user
});