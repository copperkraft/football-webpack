import ko from 'knockout';

import './league-table.less';
import template from 'components/league-table/league-table.html';
import register from 'components/component-registrator';

import {leaguesList} from 'constants/leagues-list';
import {leagueTable} from 'providers/league-table-provider';
import 'bindings/spinner';
import 'bindings/href';

class LeagueTableViewModel {
    constructor() {
        this.leagues = leaguesList;
        this.selectedLeagueName = ko.observable(leaguesList[0]);
        this.selectedLeague = ko.observable();

        this.leagueNameSubscription = this.selectedLeagueName.subscribe(() => {
            this.selectedLeague(undefined);
            leagueTable.get(this.selectedLeagueName())
                .then(data => this.selectedLeague(data));
        });
    }

    dispose() {
        this.leagueNameSubscription.dispose();
    }
}

register('league-table', template, LeagueTableViewModel);