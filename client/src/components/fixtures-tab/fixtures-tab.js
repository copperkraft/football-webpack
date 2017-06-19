import ko from 'knockout';

import template from 'components/fixtures-tab/fixtures-tab.html';
import {fixturesList} from 'models/fixtures-list';
import Pikaday from 'pikaday';

class TeamsViewModel {
    constructor(params) {
        this.season = {
            from: new Date('09.01.2016'),
            to: new Date('05.31.2017')
        };
        this.dateFrom = ko.observable(this.season.from.toDateString());
        this.dateTo = ko.observable(this.season.to.toDateString());

        new Pikaday({
            field: document.getElementsByClassName('js-datepicker-from')[0],
            minDate: this.season.from,
            maxDate: this.season.to,
            defaultDate: this.season.from,
            toString: date => date.toDateString(),
            parse: (dateString) => new Date(dateString)
        });
        new Pikaday({
            field: document.getElementsByClassName('js-datepicker-to')[0],
            minDate: this.season.from,
            maxDate: this.season.to,
            defaultDate: this.season.to,
            toString: date => date.toDateString(),
            parse: (dateString) => new Date(dateString)
        });

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
