import ko from 'knockout';

import template from 'components/league-table/league-table.html';

import {leaguesList} from 'models/leagues-list';
import {leagueTable} from 'models/league-table';

class LeagueViewModel {
    constructor() {
        this.leagues = leaguesList;
        this.selectedLeagueName = ko.observable(leaguesList[0]);

        this.selectedLeague = ko.pureComputed(function() {
            return leagueTable.get(this.selectedLeagueName());
        }, this);
    }
}

export {LeagueViewModel as viewModel, template};