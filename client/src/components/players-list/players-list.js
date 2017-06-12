import ko from 'knockout';

import template from 'components/league-teams/player-list.html';

import {teamPlayers} from 'models/league-teams';
import {favorites} from 'models/favorites';

function TeamsViewModel(params) {
    this.toggleFavoriteState = () => {
        if(this.favorites.list().some(item => item === params)) { //todo move logic to favorite model
            this.favorites.remove(name);
        } else {
            this.favorites.add(name);
        }
    };
    this.leagues = leaguesList;
    this.selectedLeagueName = ko.observable(leaguesList()[0]);
    this.selectedLeagueTeams = ko.pureComputed(function() {
        return leagueTeams.get(this.selectedLeagueName());
    }, this);
}

export {TeamsViewModel as viewModel, template};