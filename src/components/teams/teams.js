/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */

const template = require('./teams.html');
const ko = require('knockout');
const leaguesList = require('models/leagues-list');
const leagueTeams = require('models/league-teams');
const favorites = require('models/favorites');


function TeamsViewModel() {


    this.favorites = favorites;

    this.toggleFavoriteState = name => {
        if(this.favorites.list().some(item => item === name)) {
            this.favorites.remove(name);
        } else {
            this.favorites.add(name);
        }
    };

    this.leagues = leaguesList;
    this.selectedLeagueName = ko.observable(leaguesList()[0]);
    this.selectedLeagueTeams = ko.pureComputed(function() {
        return leagueTeams(this.selectedLeagueName());
    }, this);
}

module.exports = { viewModel: TeamsViewModel, template: template };
