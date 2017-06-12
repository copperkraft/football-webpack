import ko from 'knockout';

import template from 'components/info-tab/info-tab.html';

function TeamsViewModel(params) {
    this.id = params.id;
}
export {TeamsViewModel as viewModel, template};