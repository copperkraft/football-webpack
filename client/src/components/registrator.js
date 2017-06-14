import ko from 'knockout';

import * as router from 'components/router/router';
import * as teams from 'components/league-teams/league-teams';
import * as league from 'components/league-table/league-table';
import * as team from 'components/team-page/team-page';
import * as players from 'components/players-list/players-list';
import * as info from 'components/info-tab/info-tab';
import * as fixturesTab from 'components/fixtures-tab/fixtures-tab';
import * as fixturesList from 'components/fixtures-list/fixtures-list';
import * as tweets from 'components/tweets-block/tweets-block';

ko.components.register('league-table', league);
ko.components.register('league-teams', teams);
ko.components.register('router', router);
ko.components.register('team-page', team);
ko.components.register('players-list', players);
ko.components.register('info-tab', info);
ko.components.register('fixtures-tab', fixturesTab);
ko.components.register('fixtures-list', fixturesList);
ko.components.register('tweets-block', tweets);

ko.applyBindings();

