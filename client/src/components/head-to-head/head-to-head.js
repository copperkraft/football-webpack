import ko from 'knockout';

import template from 'components/head-to-head/head-to-head.html';
import {fixtureInfo} from 'providers/fixture-info';

class FixtureViewModel {
    constructor(params) {
        this.fixture = ko.observable(fixtureInfo.get(params.fixture().id));
        params.fixture.subscribe((data) => {
            this.fixture(fixtureInfo.get(data.id));
        });
    }
}
export {FixtureViewModel as viewModel, template};