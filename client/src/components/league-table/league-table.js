import ko from 'knockout';

import './league-table.less';
import template from 'components/league-table/league-table.html';
import register from 'components/component-registrator';

import {leaguesList} from 'constants/leagues-list';
import {leagueTable} from 'providers/league-table-provider';
import 'bindings/team-link';

class LeagueTableViewModel {
    constructor() {
        this.leagues = leaguesList;
        this.selectedLeagueName = ko.observable(leaguesList[0]);
        this.selectedLeague = ko.observable();

        this.selectedLeagueName.subscribe((league) => this.loadInfo(league));
    }

    loadInfo(id) {
        leagueTable.get(id).then(data =>
            this.selectedLeague(data)
        );
    }
}

register('league-table', template, LeagueTableViewModel);