import ko from 'knockout';


import './fixtures-tab.less';
import template from './fixtures-tab.html';
import register from 'components/component-registrator';

import 'bindings/calendar';
import {fixturesList} from 'providers/fixtures-list-provider';

import 'components/head-to-head/head-to-head';
import 'components/list-paginator/list-paginator';

import 'bindings/date';

class FixturesTabViewModel {
    constructor(params) {
        this.season = { //todo: fetch data from server
            from: new Date('09.01.2016'),
            to: new Date('05.31.2017')
        };

        this.dateFrom = ko.observable(this.season.from.toDateString());
        this.dateTo = ko.observable(this.season.to.toDateString());

        this.fixtures = ko.observable();
        fixturesList.get(params.id).then(data => this.fixtures(data));

        this.relevantFixtures = ko.pureComputed(() => {
            if (this.fixtures()) {
                return this.fixtures().filter(fixture => {
                    return fixture.date > new Date(this.dateFrom()) &&
                        fixture.date < new Date(this.dateTo());
                });
            }
            return [];
        });

        this.selectedFixture = ko.observable();
        this.id = params.id;
    }

    selectFixture(fixture) {
        this.selectedFixture(fixture);
    }
}

register('fixtures-tab', template, FixturesTabViewModel);
