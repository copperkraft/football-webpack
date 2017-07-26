import ko from 'knockout';

import './fixtures-tab.less';
import template from './fixtures-tab.html';
import register from 'components/component-registrator';

import 'bindings/calendar';
import {fixturesList} from 'providers/fixtures-list-provider';

import 'components/head-to-head/head-to-head';
import 'components/list-paginator/list-paginator';
import 'bindings/date';

import {initialPage, defaultPagesize} from 'constants/pagination';

class FixturesTabViewModel {
    constructor(params) {
        this.dateFrom = ko.observable();
        this.dateTo = ko.observable();

        this.fixtures = ko.observable();
        this.pageCount = ko.observable();
        this.currentPage = ko.observable(initialPage);
        this.pageSize = ko.observable(defaultPagesize);

        this.disposables = [];
        this.disposables.push(this.dateFrom.subscribe(this.loadFixtures.bind(this)));
        this.disposables.push(this.dateTo.subscribe(this.loadFixtures.bind(this)));
        this.disposables.push(this.currentPage.subscribe(this.loadFixtures.bind(this)));
        this.disposables.push(this.pageSize.subscribe(this.loadFixtures.bind(this)));

        this.selectedFixture = ko.observable();
        this.id = params.id;

        this.loadFixtures();
    }

    dispose() {
        this.disposables.forEach(disposable => disposable.dispose());
    }

    loadFixtures() {
        this.fixtures(null);
        fixturesList.get(
            this.id, {
                size: this.pageSize(),
                number: this.currentPage() - 1
            }, {
                minDate: this.dateFrom(),
                maxDate: this.dateTo()
            })
            .then(data => {
                this.fixtures(data.list);
                this.pageCount(data.pageCount);

                this.dateFrom() || this.dateFrom(data.minDate);
                this.dateTo() || this.dateTo(data.maxDate);
            });
    }

    selectFixture(fixture) {
        this.selectedFixture(fixture);
    }
}

register('fixtures-tab', template, FixturesTabViewModel);
