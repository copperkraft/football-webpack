import ko from 'knockout';

import './league-teams.less';
import template from 'components/league-teams/league-teams.html';
import register from 'components/component-registrator';

import {leaguesList} from 'constants/leagues-list';
import {leagueTeams} from 'providers/league-teams-provider';
import {favorites} from 'providers/favorites-provider';

class ViewModel {
    constructor() {
        this.favorites = favorites;
        this.leagues = leaguesList;

        this.selectedLeagueName = ko.observable(leaguesList()[0]);

        this.selectedLeagueTeams = ko.observable();

        leagueTeams.get(this.selectedLeagueName())
            .then(data => this.selectedLeagueTeams(data));

        this.selectedLeagueName.subscribe(() => {

        });
    }

    toggleFavoriteState(name) {
        if(this.isFavorite(name)) {
            this.favorites.remove(name);
        } else {
            this.favorites.add(name);
        }
    }

    isFavorite(name) {
        return this.favorites.list().some(item => item === name);
    }
}

register('league-teams', ViewModel, template);