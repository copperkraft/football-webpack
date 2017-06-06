const less = require('./app.less');
const ko = require('knockout');

const router = require('components/router/router');
const teams = require('components/league-teams/league-teams');
const league = require('components/league-table/league-table.component');

ko.components.register('league', league);
ko.components.register('teams', teams);
ko.components.register('router', router);
ko.applyBindings();
