import ko from 'knockout';

import './players-list.less';
import template from 'components/players-list/players-list.html';
import register from 'components/component-registrator';

import {teamPlayers} from 'providers/team-players';


class ViewModel {
    constructor(params) {
        this.players = ko.observable([]);
        teamPlayers.get(params.id)
            .then(data => this.players(data));
    }
}

register('players-list', ViewModel, template);