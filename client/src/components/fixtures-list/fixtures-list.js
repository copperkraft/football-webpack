import ko from 'knockout';

import template from 'components/fixtures-list/fixtures-list.html';
import {fixturesList} from 'models/fixtures-list';

function fixturesListModel(params) {
    console.log(params);
    this.fixtures = fixturesList.get(params.id);
}
export {fixturesListModel as viewModel, template};