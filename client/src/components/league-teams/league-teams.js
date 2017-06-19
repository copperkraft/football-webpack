import ko from 'knockout';

import template from 'components/league-teams/league-teams.html';

import {leaguesList} from 'models/leagues-list';
import {leagueTeams} from 'models/league-teams';
import {favorites} from 'models/favorites';

class TeamsViewModel {
    constructor() {
        this.favorites = favorites;

        this.leagues = leaguesList;
        this.selectedLeagueName = ko.observable(leaguesList()[0]);
        this.selectedLeagueTeams = ko.pureComputed(function() {
            return leagueTeams.get(this.selectedLeagueName());
        }, this);
    }

    toggleFavoriteState(name) {
        if(this.favorites.list().some(item => item === name)) {
            this.favorites.remove(name);
        } else {
            this.favorites.add(name);
        }
    }
}

export {TeamsViewModel as viewModel, template};