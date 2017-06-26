import ko from 'knockout';

import './league-table.less';
import template from 'components/league-table/league-table.html';

import {leaguesList} from 'constants/leagues-list';
import {leagueTable} from 'providers/league-table';

class LeagueViewModel {
    constructor() {
        this.leagues = leaguesList;
        this.selectedLeagueName = ko.observable(leaguesList[0]);
        this.selectedLeague = ko.observable();

        this.selectedLeagueName.subscribe(() => {
            leagueTable.get(this.selectedLeagueName())
                .then(data => this.selectedLeague(data));
        });
    }
}

export {LeagueViewModel as viewModel, template};