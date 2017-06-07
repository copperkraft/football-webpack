import ko from 'knockout';

import * as router from 'components/router/router';
import * as teams from 'components/league-teams/league-teams';
import * as league from 'components/league-table/league-table';

ko.components.register('league', league);
ko.components.register('teams', teams);
ko.components.register('router', router);
ko.applyBindings();

