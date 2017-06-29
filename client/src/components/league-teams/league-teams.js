import ko from 'knockout';

import './league-teams.less';
import template from 'components/league-teams/league-teams.html';
import register from 'components/component-registrator';

import {leaguesList} from 'constants/leagues-list';
import {leagueTeams} from 'providers/league-teams-provider';
import {favorites} from 'providers/favorites-provider';
import 'bindings/team-link';

class LeagueTeamsViewModel {
    constructor() {
        this.favorites = ko.observableArray();
        this.loadFavorites();

        this.leagues = leaguesList;
        this.selectedLeagueName = ko.observable(leaguesList()[0]);
        this.selectedLeagueTeams = ko.observable();

        this.loadTeams(this.selectedLeagueName());

        this.selectedLeagueName.subscribe(value => this.loadTeams(value));
    }

    toggleFavoriteState(team) {
        if(this.isFavorite(team)) {
            favorites.remove(team).then(() => this.loadFavorites());
        } else {
            favorites.add(team).then(() => this.loadFavorites());
        }
    }

    isFavorite(team) {
        return this.favorites().some(item => item.name === team.name);
    }

    loadTeams(name) {
        leagueTeams.get(name).then(data =>
            this.selectedLeagueTeams(data)
        );
    }

    loadFavorites() {
        favorites.get().then(data => this.favorites(data))
    }
}

register('league-teams', template, LeagueTeamsViewModel);