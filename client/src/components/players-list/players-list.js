import ko from 'knockout';

import './players-list.less';
import template from 'components/players-list/players-list.html';
import register from 'components/component-registrator';

import {teamPlayers} from 'providers/team-players-provider';
import 'components/list-paginator/list-paginator';
import 'bindings/date';

class PlayerListViewModel {
    constructor(params) {
        this.players = ko.observableArray([]);
        teamPlayers.get(params.id).then(data => this.players(data));
    }
}

register('players-list', template, PlayerListViewModel);