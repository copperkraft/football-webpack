import ko from 'knockout';

import './players-list.less';
import template from 'components/players-list/players-list.html';
import register from 'components/component-registrator';

import {teamPlayers} from 'providers/team-players-provider';
import 'components/list-paginator/list-paginator';
import 'bindings/date';

import {initialPage, defaultPagesize} from 'constants/pagination';

class PlayerListViewModel {
    constructor(params) {
        this.players = ko.observableArray();
        this.pageCount = ko.observable();
        this.currentPage = ko.observable(initialPage);
        this.pageSize = ko.observable(defaultPagesize);

        this.currentPageSubscription = this.currentPage.subscribe(this.loadPlayers.bind(this));
        this.pageCountSubscription = this.pageSize.subscribe(this.loadPlayers.bind(this));

        this.id = params.id;

        this.loadPlayers();
    }

    dispose() {
        this.currentPageSubscription.dispose();
        this.pageCountSubscription.dispose();
    }

    loadPlayers() {
        this.players(null);
        teamPlayers.get(this.id, {size: this.pageSize(), number: this.currentPage() - 1})
            .then(data => {
                this.pageCount(data.pageCount);
                this.players(data.list);
            });
    }
}

register('players-list', template, PlayerListViewModel);