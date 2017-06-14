import ko from 'knockout';

import template from 'components/fixtures-tab/fixtures-tab.html';
import {fixturesList} from 'models/fixtures-list';

function TeamsViewModel(params) {
    this.selectedFixture = ko.observable();
    this.id = params.id;
    this.isSelected = id => {};
    this.fixtures = fixturesList.get(params.id);
}
export {TeamsViewModel as viewModel, template};