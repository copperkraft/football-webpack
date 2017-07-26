import ko from 'knockout';

import './head-to-head.less';
import template from './head-to-head.html';
import register from 'components/component-registrator';

import {fixtureInfo} from 'providers/fixture-info-provider';
import 'bindings/date';

class HeadToHeadViewModel {
    constructor(params) {
        this.fixture = ko.observable();
        this.loadFixtures(params.fixture().id);
        this.fixtureSubscription = params.fixture.subscribe(fixture =>
            this.loadFixtures(fixture.id)
        );
    }

    loadFixtures(fixtureId) {
        this.fixture(null);
        fixtureInfo.get(fixtureId).then(data => this.fixture(data));
    }

    dispose() {
        this.fixtureSubscription.dispose();
    }
}

register('head-to-head', template, HeadToHeadViewModel);