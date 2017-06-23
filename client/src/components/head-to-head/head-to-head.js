import ko from 'knockout';

import './head-to-head.less';
import template from './head-to-head.html';
import {fixtureInfo} from 'providers/fixture-info';

class FixtureViewModel {
    constructor(params) {
        this.fixture = ko.observable();
        fixtureInfo.get(params.fixture().id).then(data =>
            this.fixture(data)
        );

        params.fixture.subscribe(fixture =>
            fixtureInfo.get(fixture.id).then(data =>
                this.fixture(data)
            )
        );
    }
}

if(!ko.components.isRegistered('head-to-head')) {
    ko.components.register('head-to-head', {viewModel: FixtureViewModel, template: template});
}

export {FixtureViewModel as viewModel, template};