import ko from 'knockout';

import './head-to-head.less';
import template from './head-to-head.html';
import register from 'components/component-registrator';

import {fixtureInfo} from 'providers/fixture-info-provider';
import 'bindings/date';

class HeadToHeadViewModel {
    constructor(params) {
        this.fixture = ko.observable();
        this.loadInfo(params.fixture().id);

        params.fixture.subscribe(fixture => this.loadInfo(fixture.id));
    }

    loadInfo(id) {
        fixtureInfo.get(id).then(data =>
            this.fixture(data)
        );
    }
}

register('head-to-head', template, HeadToHeadViewModel);