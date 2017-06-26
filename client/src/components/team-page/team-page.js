import ko from 'knockout';

import './team-page.less';
import template from 'components/team-page/team-page.html';

import {teamInfo} from 'providers/team-info';

class TeamsViewModel {
    constructor(params) {
        this.team = ko.observable();
        teamInfo.get(params.id).then(data => this.team(data));

        this.selectedTab = ko.observable('fixtures-tab');

        this.tab = ko.pureComputed(function () {
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