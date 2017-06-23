import ko from 'knockout';

import * as router from 'components/router/router';
import * as teams from 'components/league-teams/league-teams';
import * as league from 'components/league-table/league-table';
import * as team from 'components/team-page/team-page';
import * as players from 'components/players-list/players-list';
import * as info from 'components/info-tab/info-tab';
import * as fixtures from 'components/fixtures-tab/fixtures-tab';
import * as tweets from 'components/tweets-block/tweets-block';
import 'components/head-to-head/head-to-head';
import * as paginator from 'components/list-paginator/list-paginator';
import * as header from 'components/header-navigation/header-navigation';


ko.components.register('league-table', league);
ko.components.register('league-teams', teams);
ko.components.register('router', router);
ko.components.register('team-page', team);
ko.components.register('players-list', players);
ko.components.register('info-tab', info);
ko.components.register('fixtures-tab', fixtures);
ko.components.register('tweets-block', tweets);
ko.components.register('list-paginator', paginator);
ko.components.register('header-navigation', header);


ko.applyBindings();