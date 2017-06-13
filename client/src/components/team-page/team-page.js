import ko from 'knockout';

import template from 'components/team-page/team-page.html';

import {favorites} from 'models/favorites';
import {teamInfo} from 'models/team-info';


function TeamsViewModel(params) {
    this.team = teamInfo.get(params.id);

    this.selectedTab = ko.observable('info-tab');

    this.changeSelection = (select) => {
        console.log('1212');
        this.selectedTab(select);
    };

    this.tab = ko.computed(function () {
        console.log(this.team());
        return {
            name: this.selectedTab,
            params: {
                id: params.id,
                name: this.team() ? this.team().name : ''
            }
        };
    }, this);
}

export {TeamsViewModel as viewModel, template};