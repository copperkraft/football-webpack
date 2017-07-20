import ko from 'knockout';

import './players-list.less';
import template from 'components/players-list/players-list.html';
import register from 'components/component-registrator';

import {teamPlayers} from 'providers/team-players-provider';
import 'components/list-paginator/list-paginator';
import 'bindings/date';

class PlayerListViewModel {
    constructor(params) {
        this.players = ko.observable([]);
        this.pageCount = ko.observable(5);
        this.currentPage = ko.observable(1);
        this.pageSize = ko.observable(5);

        this.currentPage.subscribe(this.loadPlayers.bind(this));
        this.pageSize.subscribe(this.loadPlayers.bind(this));

        this.id = params.id;

        this.loadPlayers();
    }

    loadPlayers() {
        teamPlayers.get(this.id, {size: this.pageSize(), number: this.currentPage()})
            .then(data => this.players(data));
    }

}

register('players-list', template, PlayerListViewModel);