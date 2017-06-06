const less = require('./app.less');
const ko = require('knockout');

const router = require('components/router/router');
const teams = require('components/teams/teams');
const league = require('components/league/league');

ko.components.register('league', league);
ko.components.register('teams', teams);
ko.components.register('router', router);
ko.applyBindings();
