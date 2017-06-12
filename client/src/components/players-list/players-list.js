import ko from 'knockout';

import template from 'components/players-list/players-list.html';

import {teamPlayers} from 'models/team-players';


function TeamsViewModel(params) {
    this.players = teamPlayers.get(params.id);
}
export {TeamsViewModel as viewModel, template};