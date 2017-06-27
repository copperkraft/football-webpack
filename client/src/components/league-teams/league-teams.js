import ko from 'knockout';

import './league-teams.less';
import template from 'components/league-teams/league-teams.html';
import register from 'components/component-registrator';

import {leaguesList} from 'constants/leagues-list';
import {leagueTeams} from 'providers/league-teams-provider';
import {favorites} from 'providers/favorites-provider';

class ViewModel {
    constructor() {
        this.favorites = ko.observableArray();
        favorites.load().then(data => this.favorites(data));

        this.leagues = leaguesList;
        this.selectedLeagueName = ko.observable(leaguesList()[0]);
        this.selectedLeagueTeams = ko.observable();

        leagueTeams.get(this.selectedLeagueName())
            .then(data => this.selectedLeagueTeams(data));

        this.selectedLeagueName.subscribe((value) => {
            leagueTeams.get(value)
                .then(data => this.selectedLeagueTeams(data));
        });
    }

    toggleFavoriteState(name) {
        if(this.isFavorite(name)) {
            favorites.remove(name);
        } else {
            favorites.add(name);
        }
        setTimeout(() => favorites.load().then(data => {
            this.favorites(data); //call this asynchronous, because add and remove methods are also asynchronous
        }), 0);

    }

    isFavorite(name) {
        return this.favorites().some(item => item === name);
    }
}

register('league-teams', ViewModel, template);