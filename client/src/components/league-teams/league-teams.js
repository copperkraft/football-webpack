import ko from 'knockout';

import './league-teams.less';
import template from 'components/league-teams/league-teams.html';

import {leaguesList} from 'constants/leagues-list';
import {leagueTeams} from 'providers/league-teams';
import {favorites} from 'providers/favorites';

class TeamsViewModel {
    constructor() {
        this.favorites = favorites;
        this.leagues = leaguesList;

        this.selectedLeagueName = ko.observable(leaguesList()[0]);

        this.selectedLeagueTeams = ko.observable(leagueTeams.get(this.selectedLeagueName()));

        this.selectedLeagueName.subscribe(() => {
            this.selectedLeagueTeams(leagueTeams.get(this.selectedLeagueName()));
        });
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