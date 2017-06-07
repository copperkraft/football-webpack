/**
 * Created by uladzimir.yakushkin on 06-Jun-17.
 */
const ko = require('knockout');

const router = require('components/router/router');
const teams = require('components/league-teams/league-teams');
const league = require('components/league-table/league-table');

ko.components.register('league', league);
ko.components.register('teams', teams);
ko.components.register('router', router);
ko.applyBindings();

