/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
const template = require('components/league/league.html');
const ko = require('knockout');
const leagueModel = require('models/league.model');
const leagueTableData = require('data/league-table-data');

function LeagueViewModel() {
    this.leagues = leagueModel.list;
    this.selectedLeagueName = ko.observable(leagueModel.list()[0]);

    this.selectedLeague = ko.pureComputed(function() {
        const table = ko.observable();
        leagueTableData(this.selectedLeagueName()).then(data => table(data));
        //setTimeout(() => console.log(table()), 1000);
        return table;
    }, this);
}

module.exports = { viewModel: LeagueViewModel, template: template };
