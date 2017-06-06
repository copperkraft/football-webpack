/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
const template = require('components/league-table/league-table.html');
const ko = require('knockout');
const leaguesList = require('models/leagues-list');
const leagueTable = require('models/league-table');

function LeagueViewModel() {
    this.leagues = leaguesList;
    this.selectedLeagueName = ko.observable(leaguesList()[0]);

    this.selectedLeague = ko.pureComputed(function() {
        const table = ko.observable();
        return leagueTable(this.selectedLeagueName());
    }, this);
}

module.exports = { viewModel: LeagueViewModel, template: template };
