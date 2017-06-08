import ko from 'knockout';

import template from 'components/team-page/team-page.html';

import {favorites} from 'models/favorites';

function TeamsViewModel() {
    this.favorites = favorites;
}

export {TeamsViewModel as viewModel, template};