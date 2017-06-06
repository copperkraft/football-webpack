/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */

const template = require('./teams.html');
const ko = require('knockout');
const leaguesList = require('models/leagues-list');
const leagueTeams = require('models/league-teams');



function TeamsViewModel() {
    function saveFavorites(name) {
        let currentState = ko.observableArray(localStorage.favorites? JSON.parse(localStorage.favorites) : []);
        if(currentState().some(item => item === name)) {
            currentState.remove(name);
        } else {
            currentState.push(name);
        }

        localStorage.favorites = JSON.stringify(currentState());
    }
    function loadFavorites() {
        return localStorage.favorites? JSON.parse(localStorage.favorites) : [];
    }


    this.favorites = ko.observableArray(loadFavorites());

    this.toggleState = function (name) {
        if(this.favorites().some(item => item === name)) {
            this.favorites.remove(name);
        } else {
            this.favorites.push(name);
        }
        saveFavorites(name);
    };


    this.leagues = leaguesList;
    this.selectedLeagueName = ko.observable(leaguesList()[0]);
    this.selectedLeagueTeams = ko.pureComputed(function() {
        return leagueTeams(this.selectedLeagueName());
    }, this);
}

module.exports = { viewModel: TeamsViewModel, template: template };
