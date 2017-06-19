import ko from 'knockout';

import template from 'components/team-page/team-page.html';

import {teamInfo} from 'models/team-info';

class TeamsViewModel {
    constructor(params) {
        this.team = teamInfo.get(params.id);

        this.selectedTab = ko.observable('fixtures-tab');

        this.tab = ko.computed(function () {
            return {
                name: this.selectedTab,
                params: {
                    id: params.id,
                    name: this.team() ? this.team().name : ''
                }
            };
        }, this);
    }

    changeSelection(select) {
        this.selectedTab(select);
    }
}

export {TeamsViewModel as viewModel, template};