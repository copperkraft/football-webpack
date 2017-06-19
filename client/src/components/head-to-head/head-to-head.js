import ko from 'knockout';

import template from 'components/head-to-head/head-to-head.html';
import {fixtureInfo} from 'models/fixture-info';

class FixtureViewModel {
    constructor(params) {
        this.fixture = ko.computed(() => fixtureInfo.get(params.fixture().id));
    }
}
export {FixtureViewModel as viewModel, template};