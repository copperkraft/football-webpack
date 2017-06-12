import ko from 'knockout';

import * as router from 'components/router/router';
import * as teams from 'components/league-teams/league-teams';
import * as league from 'components/league-table/league-table';
import * as team from 'components/team-page/team-page';
import * as players from 'components/players-list/players-list';

ko.components.register('league-table', league);
ko.components.register('league-teams', teams);
ko.components.register('router', router);
ko.components.register('team-page', team);
ko.components.register('players-list', players);
ko.applyBindings();

