import ko from 'knockout';

import './players-list.less';
import template from 'components/players-list/players-list.html';
import register from 'components/component-registrator';

import {teamPlayers} from 'providers/team-players-provider';
import 'components/list-paginator/list-paginator';
import 'bindings/date';

const defaultPageSize = 5;
const defaultPage = 1;

class PlayerListViewModel {
    constructor(params) {
        this.players = ko.observable();
        this.pageCount = ko.observable();
        this.currentPage = ko.observable(defaultPage);
        this.pageSize = ko.observable(defaultPageSize);

        this.currentPage.subscribe(this.loadPlayers.bind(this));
        this.pageSize.subscribe(this.loadPlayers.bind(this));

        this.id = params.id;

        this.loadPlayers();
    }

    loadPlayers() {
        this.players(null);
        teamPlayers.get(this.id, {size: this.pageSize(), number: this.currentPage()})
            .then(data => {
                this.pageCount(data.pageCount);
                this.players(data.list);
            });
    }
}

register('players-list', template, PlayerListViewModel);