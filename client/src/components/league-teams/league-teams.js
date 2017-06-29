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

    toggleFavoriteState(team) {
        if(this.isFavorite(team)) {
            favorites.remove(team).then(() =>
                favorites.get().then(data => this.favorites(data))
            );
        } else {
            favorites.add(team).then(() =>
                favorites.get().then(data => this.favorites(data))
            );
        }
    }

    isFavorite(team) {
        return this.favorites().some(item => item.name === team.name);
    }
}

register('league-teams', template, LeagueTeamsViewModel);