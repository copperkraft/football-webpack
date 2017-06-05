/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
const template = require('components/league/league.html');
const ko = require('knockout');
const leagueModel = require('models/league.model');


function LeagueViewModel() {
    this.leagues = leagueModel.list;
    this.selectedLeagueName = ko.observable(leagueModel.list()[0]);

    this.selectedLeague = ko.computed(function() {
        return leagueModel.loadLeague(this.selectedLeagueName());
    }, this);
}

module.exports = { viewModel: LeagueViewModel, template: template };
