import ko from 'knockout';

import template from 'components/team-page/team-page.html';

import {favorites} from 'models/favorites';
import {teamInfo} from 'models/team-info';


function TeamsViewModel(params) {
    this.team = teamInfo.get(params.id);

    this.selectedTab = ko.observable('info-tab');

    this.tab = ko.computed(function () {
        return {
            name: this.selectedTab,
            params: {
                id: params.id
            }
        };
    }, this);
}

export {TeamsViewModel as viewModel, template};