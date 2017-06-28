import ko from 'knockout';

import './league-teams.less';
import template from 'components/league-teams/league-teams.html';
import register from 'components/component-registrator';

import {leaguesList} from 'constants/leagues-list';
import {leagueTeams} from 'providers/league-teams-provider';
import {favorites} from 'providers/favorites-provider';

class LeagueTeamsViewModel {
    constructor() {
        this.favorites = ko.observableArray();
        favorites.get().then(data => this.favorites(data));

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
            favorites.remove(name).then(() =>
                favorites.get().then(data => this.favorites(data))
            );
        } else {
            favorites.add(name).then(() =>
                favorites.get().then(data => this.favorites(data))
            );
        }
    }

    isFavorite(name) {
        return this.favorites().some(item => item === name);
    }
}

register('league-teams', template, LeagueTeamsViewModel);