import ko from 'knockout';

import template from 'components/fixtures-tab/fixtures-tab.html';

function TeamsViewModel(params) {
    this.id = params.id
}
export {TeamsViewModel as viewModel, template};