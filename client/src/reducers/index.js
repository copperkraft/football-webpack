import {combineReducers} from 'redux';

import {selectedLeague} from 'reducers/selected-league';
import {leagueTable} from 'reducers/league-table';
import {leagueTeams} from 'reducers/league-teams';
import {teamInfo} from 'reducers/team-info';
import teamPlayers from 'reducers/team-players';
import teamFixtures from 'reducers/team-fixtures';
import {tweets} from 'reducers/tweets';
import {user} from 'reducers/user';
import {fixtureInfo} from 'reducers/fixture-info';
import {favorites} from 'reducers/favorites';

export default combineReducers({
    selectedLeague,
    leagueTable,
    leagueTeams,
    teamInfo,
    teamPlayers,
    teamFixtures,
    tweets,
    user,
    fixtureInfo,
    favorites
});