import ko from 'knockout';

import './league-table.less';
import template from 'components/league-table/league-table.html';
import register from 'components/component-registrator';

import {leaguesList} from 'constants/leagues-list';
import {leagueTable} from 'providers/league-table';

class ViewModel {
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

register('league-table', ViewModel, template);