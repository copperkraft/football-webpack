import template from 'components/team-page/team-page.html';

import {favorites} from 'models/favorites';

function TeamsViewModel(params) {
    this.id = params.id;
}

export {TeamsViewModel as viewModel, template};