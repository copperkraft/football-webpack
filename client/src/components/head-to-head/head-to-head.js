import ko from 'knockout';

import template from 'components/head-to-head/head-to-head.html';
import {fixtureInfo} from 'providers/fixture-info';

class FixtureViewModel {
    constructor(params) {
        this.fixture = fixtureInfo.get(params.fixture().id);
    }
}
export {FixtureViewModel as viewModel, template};