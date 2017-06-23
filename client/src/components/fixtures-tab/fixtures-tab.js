import ko from 'knockout';

import './fixtures-tab.less';
import template from './fixtures-tab.html';
import {fixturesList} from 'providers/fixtures-list';

class TeamsViewModel {
    constructor(params) {
        this.season = { //todo: fetch data from server
            from: new Date('09.01.2016'),
            to: new Date('05.31.2017')
        };

        this.dateFrom = ko.observable(this.season.from.toDateString());
        this.dateTo = ko.observable(this.season.to.toDateString());

        this.fixtures = fixturesList.get(params.id);

        this.relevantFixtures = ko.pureComputed(() => {
            if (this.fixtures && this.fixtures()) {
                return this.fixtures().filter(fixture => {
                    return fixture.date > new Date(this.dateFrom()) &&
                        fixture.date < new Date(this.dateTo());
                });
            }
        });

        this.selectedFixture = ko.observable();
        this.id = params.id;
    }
}
export {TeamsViewModel as viewModel, template};
