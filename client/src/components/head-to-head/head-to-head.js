import ko from 'knockout';

import './head-to-head.less';
import template from './head-to-head.html';
import register from 'components/component-registrator';

import {fixtureInfo} from 'providers/fixture-info-provider';

class ViewModel {
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

register('head-to-head', ViewModel, template);