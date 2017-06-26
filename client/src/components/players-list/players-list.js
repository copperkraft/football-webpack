import ko from 'knockout';

import './players-list.less';
import template from 'components/players-list/players-list.html';

import {teamPlayers} from 'providers/team-players';


class TeamsViewModel {
    constructor(params) {
        this.players = ko.observable([]);
        teamPlayers.get(params.id)
            .then(data => this.players(data));
    }
}
export {TeamsViewModel as viewModel, template};